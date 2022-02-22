const { readFileSync, writeFileSync } = require('fs');
const { XMLParser } = require('fast-xml-parser');
const contentful = require('contentful-management')
const { richTextFromMarkdown } = require('@contentful/rich-text-from-markdown');
const moment = require('moment')

var TurndownService = require('turndown')
var turndownService = new TurndownService()


const xmlData = readFileSync('./blogger.xml', 'utf8');
const parser = new XMLParser();
const jObj = parser.parse(xmlData);


const entries = jObj.feed.entry.slice(52, 679).map((e, i) => ({
    index: i,
    title: e.title,
    published: e.published,
    content: e.content,
    category: e.category,
}))

console.log(entries.length);

const client = contentful.createClient({
  accessToken: 'CFPAT-PCuWTdHO_WANvuvIjKzsywV88ty2SpymtPC_n5jmTzA'
})

var failed = []

async function main() {
    // these were manually stepped through 50 records at a time.
    // await importEntry(entries[101])
    // for (let i = 600; i < 628; i++) {
    //     await importEntry(entries[i])
    // }
    console.log('done w import.')
}

async function importEntry(entry) {
    const entryTitle = entry.title > '' ? entry.title : `Update: ${moment(entry.published).format('MMMM Do YYYY')}`
    try {
        const mkcdown = turndownService.turndown(entry.content);
        const rich = await richTextFromMarkdown(mkcdown)
    
        // Create entry
        const space = await client.getSpace('sphy73k6uzpa');
        const env = await space.getEnvironment('master');
        const createdEntry = await env.createEntryWithId('update', `blogger-post-${entry.index}`, {
            fields: {
                title: {
                'en-US': entryTitle
                },
                description: {
                    'en-US': rich
                },
                published: {
                    'en-US': entry.published
                }
            }
        });
        await createdEntry.publish();
    } catch (e) {
        console.log('failed on entry:', entry.index, entryTitle, e);
        failed.push(entry)
    }
}

main()


// const { id, content, published, title, category } = jObj.feed.entry[10];
// const parsed = htmlParser(content);
// console.log('title', title);
// // console.log(content)

// writeFileSync('./tmp.html', content);
// // console.log(parsed.childNodes[1].childNodes);


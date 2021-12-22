import { createClient } from 'contentful';

var client = createClient({
    space: process.env.CF_SPACE_ID,
    accessToken: process.env.CF_TOKEN
});

export var getMenu = async (entryId = '6wKUqAuj95bWl80kpUreYN') => {
    var entry = await client.getEntry(entryId)
    return entry.fields.children
        .filter(child => child.fields.active)
        .map(child => ({
            title: child.fields.title,
            url: child.fields.url
        }))
}

export var getPageById = async (id) => {
    var entry = await client.getEntry(id)
    console.log(entry)
    return entry.fields
}
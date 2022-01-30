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
    return entry.fields
}

export var getPageBySlug = async (slug) => {
    var entries = await client.getEntries({
        content_type: 'menuItem',
        ['fields.url']: slug,
    })
    
    return entries.items.map(item => item.fields)[0]
}

export var getSlideshow = async () => {
    var entry = await client.getEntry('2fppMoXpsfcNDI1YFX04y0')
    var images = entry.fields.images.map(image => ({
        src: image.fields.file.url,
        title: image.fields.title,
    }))
    return images
}

export var getLatestUpdates = async () => {
    var entries = await client.getEntries({
        content_type: 'update',
        order: '-fields.published',
    })
    return entries.items.map(item => item.fields)
}
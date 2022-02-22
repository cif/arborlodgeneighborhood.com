import { createClient } from 'contentful';

const UPDATES_PAGE_SIZE = 5;

var client = createClient({
    space: process.env.CF_SPACE_ID,
    accessToken: process.env.CF_TOKEN
});

export var getMenu = async (entryId = '6wKUqAuj95bWl80kpUreYN') => {
    var rootMenuItem = await client.getEntries({
        'sys.id': entryId,
        content_type: 'menuItem',
        include: 2,
        select: 'fields.active,fields.url,fields.title,fields.children'
    })

    const mappedItem = (item) => ({
        url: item.fields.url,
        title: item.fields.title,
        children: item.fields.children ? item.fields.children.map(mappedItem) : []
    })

    const menu = rootMenuItem.items[0].fields.children.map(mappedItem)
    return menu
}

export var getPageById = async (id) => {
    var entry = await client.getEntry(id)
    return entry.fields
}

export var getPageBySlug = async (slug) => {
    var entries = await client.getEntries({
        include: 1,
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

export var getLatestUpdates = async (page = 1, filterLandUse = false) => {
    var tagQuery = filterLandUse 
        ? {'metadata.tags.sys.id[all]': 'landUse'}
        : {}
    var entries = await client.getEntries({
        content_type: 'update',
        order: '-fields.published',
        skip: (page - 1) * UPDATES_PAGE_SIZE,
        limit: UPDATES_PAGE_SIZE,
        ...tagQuery
    })
    return {
        page,
        pageSize: UPDATES_PAGE_SIZE,
        total: entries.total,
        entries: entries.items.map(item => item.fields)
    }
}
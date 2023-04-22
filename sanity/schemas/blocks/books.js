export default {
    name: 'books',
    title: 'Books',
    type: 'document',
    fields: [
        {
            name: 'active',
            title: 'Active',
            type: 'boolean',
            initialValue: true
        },
        {
            name: 'url',
            title: 'Url',
            type: 'string',
        },
        {
            title: 'Image',
            name: 'image',
            type: 'image',
            description: 'Add jpeg, png or svg file',
            options: {
                hotspot: true 
            },
          },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
    ],
  }
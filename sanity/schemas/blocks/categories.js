export default {
    name: 'categories',
    title: 'Categories',
    type: 'document',
    fields: [
      {
        name: 'activeCategory',
        title: 'Active category',
        description: "If it is set to false, the category is not visible to users",
        type: 'boolean',
        initialValue: true
      },
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 200,
          slugify: input => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200)
        }
      },
      {
        name: 'shortDescription',
        title: 'Short description',
        type: 'text',
      },
      {
        type: 'string',
        name: 'meta_keywords',
        title: 'Meta keywords',
        description: 'Key phrases or words separated by commas'
      },
    ]
  }
  
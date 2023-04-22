
export default {
  name: 'stories',
  title: 'Stories',
  type: 'document',
  fields: [
    {
      name: 'active',
      title: 'Active',
      type: 'boolean',
      initialValue: true
    },
    {
      name: 'isPremier',
      title: 'Is premier',
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
      title: 'Category',
      name: 'category',
      type: 'reference',
      to: {type: 'categories'}
    },
    {
      title: 'Tags',
      name: 'tags',
      description: 'Adds to meta tag "keywords"',
      type: 'array',
      of: [{type: 'string'}],
      initialValue: ['история', 'рассказ'],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      }
    },
    {
      name: 'shortDescription',
      title: 'Short description',
      type: 'text',
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [
        {
          title: 'Block',
          name:'block',
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'}, //p
            {title: 'H1', value: 'h1'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'H4', value: 'h4'},
          ],
        },
        {
          name: 'one_image',
          title: 'One image',
          type: 'image',
          options: {
            hotspot: true,
          }, 
          fields: [
            {
              title: 'Alt',
              name: 'alt',
              type: 'string'
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
              // options: {
              //   isHighlighted: true // <-- make this field easily accessible
              // }
            },
          ]
        },
        {
          name: 'one_image_vertical',
          title: 'One image vertical',
          type: 'image',
          options: {
            hotspot: true,
          }, 
          fields: [
            {
              title: 'Alt',
              name: 'alt',
              type: 'string'
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
              // options: {
              //   isHighlighted: true // <-- make this field easily accessible
              // }
            },
          ]
        },
        {type: "youtubeVideo"},
        {type: "vimeoVideo"},
      ]
    },
    {
      name: 'releaseDate',
      title: 'Release Date',
      type: 'date'
    },
  ]
}

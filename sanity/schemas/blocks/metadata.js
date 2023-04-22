export default {
  name: 'metadata',
  title: 'Metadata',
  type: 'document',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Page slug',
    },
    {
      type: 'string',
      name: 'meta_title',
      title: 'Meta title',
    },
    {
      type: "text",
      name: "meta_description",
      title: "Meta description",
    },
    {
      type: 'string',
      name: 'meta_keywords',
      title: 'Meta keywords',
      description: 'Key phrases or words separated by commas'
    },
  ],
  preview: {
    select: {
      meta_title: 'meta_title',
    },
    prepare(selection) {
      const { meta_title } = selection
      return {
        title: meta_title,
      }
    }
  }
}
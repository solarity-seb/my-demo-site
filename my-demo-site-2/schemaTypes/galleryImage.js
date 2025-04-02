export default {
    name: 'galleryImage',
    title: 'Gallery Image',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string'
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true
        }
      },
      {
        name: 'alt',
        title: 'Alt Text',
        type: 'string'
      },
      {
        name: 'caption',
        title: 'Caption',
        type: 'string'
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string'
      }
    ]
  }
  
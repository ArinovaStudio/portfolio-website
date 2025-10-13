import {PlayIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const caseType = defineType({
  name: 'case-studies',
  title: 'Case Studies',
  type: 'document',
  icon: PlayIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
        name: "mini-description",
        type: "string",
    }),
    defineField({
        name: "percentage",
        type: "number",
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        })
      ]
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      type: 'blockContent',
    }),
    defineField({
  name: 'stats',
  title: 'stats',
  type: 'array',
  of: [
    {
      type: 'object',
      fields: [
        {
          name: 'key',
          type: 'string',
          title: 'Key',
        },
        {
          name: 'value',
          type: 'string',
          title: 'Value',
        },
      ],
    },
  ],
  validation: Rule => Rule.max(4).warning('You can only add up to 4 key-value pairs'),
}),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})

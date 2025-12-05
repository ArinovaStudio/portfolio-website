import {PlayIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const caseType = defineType({
  name: 'caseStudies',
  title: 'Case Studies',
  type: 'document',
  icon: PlayIcon,
  fields: [
        defineField({
      name: 'businessName',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
      },
    }),
    defineField({
        name: "miniDescription",
        type: "string",
        validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: "percentage",
        type: "number",
        validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      validation: (Rule) => Rule.required(),
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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'body',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
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
  ]
})

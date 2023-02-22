import {defineField, defineType} from 'sanity'
import {format} from 'date-fns'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'consumedAt',
      title: 'Consumed at',
      type: 'datetime',
      initialValue: (new Date()).toISOString()
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: (doc) => {
          const date = format(new Date(doc.consumedAt), "yyyy-MM-dd");
          return `${date}-${doc.title}`;
        },
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'spice',
      title: 'Spice Rating',
      type: 'number',
      initialValue: 5,
      min: 1,
      max: 5,
      description: 'Rating 1 being least spicy, 5 being very spicy',
      options: {
        range: {
            min: 1, // Minimum value
            max: 5, // Maximum value
            step: 1 // Slider interval
        },
        labels: [
            { value: 1, title: 'Not Spicy' },
            { value: 2, title: 'Less Spicy' },
            { value: 3, title: 'Moderate Spicy' },
            { value: 4, title: 'More Spicy' },
            { value: 5, title: 'Most' }
        ]
    }
    }),
    defineField({
      name: 'heavy',
      title: 'Heavy Meal Rating',
      type: 'number',
      initialValue: 5,
      min: 1,
      max: 5,
      description: 'Rating 1 being light meal, 5 being heavy meal',
      options: {
        range: {
            min: 1, // Minimum value
            max: 5, // Maximum value
            step: 1 // Slider interval
        },
        labels: [
            { value: 1, title: 'Light' },
            { value: 2, title: 'Moderately light' },
            { value: 3, title: 'Moderate' },
            { value: 4, title: 'Moderately heavy' },
            { value: 5, title: 'Heavy' }
        ]
    }
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      date: 'consumedAt',
      media: 'mainImage',
    },
    prepare(selection) {
      return {...selection, subtitle: format(new Date(selection.date), "yyyy-MM-dd")}
    },
  },
})

import {defineField, defineType} from 'sanity'
import {format} from 'date-fns'

export default defineType({
  name: 'feeling',
  title: 'Feeling',
  type: 'document',
  fields: [
    defineField({
      name: 'consumedAt',
      title: 'Consumed at',
      type: 'datetime',
      initialValue: new Date().toISOString(),
    }),
    defineField({
      name: 'feelingRating',
      title: 'Feeling Rating',
      type: 'number',
      initialValue: 5,
      min: 1,
      max: 5,
      description: 'Rating 1 being worst, 5 being best',
      options: {
        range: {
          min: 1, // Minimum value
          max: 5, // Maximum value
          step: 1, // Slider interval
        },
        labels: [
          {value: 1, title: 'Very bad'},
          {value: 2, title: 'Bad'},
          {value: 3, title: 'Moderate'},
          {value: 4, title: 'Well'},
          {value: 5, title: 'very Well'},
        ],
      },
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      date: 'consumedAt',
    },
    prepare(selection) {
      return {title: format(new Date(selection.date), 'yyyy-MM-dd')}
    },
  },
})

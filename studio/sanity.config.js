import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {dashboardConfig} from './dashboardConfig.js'

export default defineConfig({
  name: 'default',
  title: 'sachin-food',

  projectId: '7b9gtmpn',
  dataset: 'production',

  plugins: [dashboardConfig, deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
  studioHost: 'sachin-food',
})

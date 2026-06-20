import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {dashboardConfig} from './dashboardConfig.js'
import {media} from 'sanity-plugin-media'

export default defineConfig({
  name: 'default',
  title: 'sachin-food',

  projectId: '7b9gtmpn',
  dataset: 'production',

  plugins: [dashboardConfig, media(), structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
  studioHost: 'sachin-food',
})


import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {documentInternationalization} from '@sanity/document-internationalization'
import {internationalizedArray} from 'sanity-plugin-internationalized-array'
import {languageFilter} from '@sanity/language-filter'
import {dataset, projectId} from './src/sanity/env'
import {schema} from './src/sanity/schema'
import {languages} from './src/sanity/locales'
import {structureTool} from 'sanity/structure'
import { table } from '@sanity/table'
import {codeInput} from '@sanity/code-input'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    documentInternationalization({
      supportedLanguages: languages,
      schemaTypes: ['posts-en', 'posts-ru', 'categories-en', 'categories-ru'],
      languageField: 'language',
      bulkPublish: true,
      addTemplates: true,
    }),
    internationalizedArray({
      languages,
      defaultLanguages: ['en'],
      fieldTypes: ['string', 'text', 'blockContent'],
      buttonLocations: ['field', 'unstable__fieldAction'],
      buttonAddAll: true,
      languageFilter: {
        documentTypes: ['posts-en', 'posts-ru', 'categories-en', 'categories-ru'],
        defaultLanguages: ['en'],
      },
    }),
    languageFilter({
      supportedLanguages: languages,
      defaultLanguages: ['en'],
      documentTypes: ['posts-en', 'posts-ru', 'categories-en', 'categories-ru'],
    }),
    structureTool(),
    visionTool(),
    codeInput(),
    table(),
  ],
})

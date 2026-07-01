
import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {googleTranslate} from 'sanity-plugin-google-translate'
import {documentInternationalization} from '@sanity/document-internationalization'
import {internationalizedArray} from 'sanity-plugin-internationalized-array'
import {languageFilter} from '@sanity/language-filter'
import {apiVersion, dataset, projectId} from './src/sanity/env'
import {schema} from './src/sanity/schema'
import {languages} from './src/sanity/locales'
import {structureTool} from 'sanity/structure'
import {codeInput} from '@sanity/code-input'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    documentInternationalization({
      supportedLanguages: languages,
      schemaTypes: ['posts', 'category'],
      languageField: 'language',
      bulkPublish: true,
      addTemplates: true,
    }),
    internationalizedArray({
      languages,
      defaultLanguages: ['en'],
      fieldTypes: ['string', 'text'],
      buttonLocations: ['field', 'unstable__fieldAction'],
      buttonAddAll: true,
      languageFilter: {
        documentTypes: ['posts', 'category'],
        defaultLanguages: ['en'],
      },
    }),
    languageFilter({
      supportedLanguages: languages,
      defaultLanguages: ['en'],
      documentTypes: ['posts', 'category'],
    }),
    googleTranslate(),
    structureTool(),
    visionTool(),
    codeInput(),
  ],
})

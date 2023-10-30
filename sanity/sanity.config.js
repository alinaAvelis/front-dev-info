import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import schemas from './schemas/schema';
import {codeInput} from '@sanity/code-input';

export default defineConfig({
  name: 'Front_Dev_Info',
  title: 'Front dev info',
  title: 'Alina Avelis',
  projectId:  `ttll739i`,
  dataset: 'production',
  plugins: [
    deskTool(),
    visionTool(),
    codeInput(),
  ],
  tools: (prev) => {
    // 👇 Uses environment variables set by Vite in development mode
    if (import.meta.env.DEV) {
      return prev
    }
    return prev.filter((tool) => tool.name !== 'vision')
  },
  schema: {
    types: schemas,
  },
})
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import schemas from './schemas/schema';

export default defineConfig({
  name: 'front-dev-info',
  title: 'Front Dev Info',
  title: 'Front Dev Info',
  projectId: "pg2igaq4",
  dataset: 'production',
  plugins: [
    deskTool(),
    visionTool(),
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
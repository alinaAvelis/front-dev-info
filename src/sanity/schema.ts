import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import category from './schemas/category'
import posts from './schemas/posts'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [posts, category, blockContent],
}

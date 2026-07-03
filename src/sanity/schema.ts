import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import { categoriesEn, categoriesRu } from './schemas/category'
import { postsEn, postsRu } from './schemas/posts'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postsEn, postsRu, categoriesEn, categoriesRu, blockContent],
}

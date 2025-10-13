import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {postType} from './postType'
import {authorType} from './authorType'
import { caseType } from './caseStudy'
import { ProductType } from './OwnProducts'
import { portfolioType } from './Portfolio'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, postType, authorType, caseType, ProductType, portfolioType],
}

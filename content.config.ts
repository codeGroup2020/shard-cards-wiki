import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    shardCards: defineCollection({
      // let Nuxt pick up .md files in content/shard-cards
      source: 'shard-cards/*.md',
      type: 'page',
      schema: z.object({
        path:        z.string(),
        imagePath: z.string(),
        title:       z.string(),
        description: z.string(),
      })
    })
  }
})

import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    shardCards: defineCollection({
      // let Nuxt pick up .md files in content/shard-cards
      source: 'shard-cards/*.md',
      type: 'page',
      schema: z.object({
        path:        z.string(),
        imagePath:   z.string(),
        title:       z.string(),
        description: z.string(),
        cost:        z.enum(['n', '1', '2', '3', '4', '5']),
        removed:     z.boolean(),
        changeHistory: z.array(
          z.record(z.string(), z.string())
        ),
        underConstruction:  z.boolean(),
      })
    })
  }
})

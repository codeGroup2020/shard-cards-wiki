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
        offenseRating: z.number().min(-5).max(5),
        defenseRating: z.number().min(-5).max(5),
        tags:        z.array(z.object({
          title:       z.string(),
          description: z.string(),
          color:       z.string().regex(/^#?[0-9A-Fa-f]{6}$/, 'Must be a valid hex color'),
        })),
      })
    })
  }
})

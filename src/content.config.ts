import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 軟體心得文章
const software = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/software' }),
  schema: z.object({
    title: z.string(),
    tag: z.string(),
    description: z.string(),
    pubDate: z.date(),
    image: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

// App 開發日誌
const appdev = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/appdev' }),
  schema: z.object({
    title: z.string(),
    stage: z.enum(['企劃', '設計', '開發', '測試', '上線']),
    date: z.date(),
    draft: z.boolean().optional().default(false),
  }),
});

// 語言學習 & 個人興趣
const interests = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/interests' }),
  schema: z.object({
    title: z.string(),
    tag: z.string(),
    description: z.string(),
    pubDate: z.date(),
    image: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { software, appdev, interests };

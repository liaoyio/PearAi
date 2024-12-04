import type { InferMetaType, InferPageType } from 'fumadocs-core/source';
import { loader } from 'fumadocs-core/source';
import { createMDXSource } from 'fumadocs-mdx';
// @ts-ignore
import { meta, docs, blog as blogPosts } from '@/.source';

export const source = loader({
  baseUrl: '/docs',
  source: createMDXSource(docs, meta),
});

export const blog = loader({
  baseUrl: '/blog',
  source: createMDXSource(blogPosts, []),
});

export type Page = InferPageType<typeof source>;
export type Meta = InferMetaType<typeof source>;

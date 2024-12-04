import { ComponentProps, FC, ReactElement } from 'react';
import { notFound } from 'next/navigation';
import { Popup, PopupContent, PopupTrigger } from 'fumadocs-twoslash/ui';
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';
import { Callout } from 'fumadocs-ui/components/callout';
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import { TypeTable } from 'fumadocs-ui/components/type-table';
import defaultComponents from 'fumadocs-ui/mdx';
import { DocsPage, DocsBody, DocsTitle, DocsDescription } from 'fumadocs-ui/page';
import { AutoTypeTable } from '@/components/ui';
import { createMetadata, MetadataProps } from '@/utils/metadata';
import { metadataImage } from '@/utils/services/metadata-image';
import { source } from '@/utils/source';

export default async function Page(props: {
  params: Promise<{ slug: string[] }>;
}): Promise<ReactElement> {
  const params = await props.params;
  const page = source.getPage(params.slug);

  if (!page) notFound();

  const path = `apps/docs/content/docs/${page.file.path}`;

  const { body: Mdx, toc, lastModified } = page.data;

  return (
    <DocsPage
      toc={toc}
      lastUpdate={lastModified}
      full={page.data.full}
      tableOfContent={{
        style: 'clerk',
        single: false,
      }}
      editOnGithub={{ repo: 'Engula', owner: 'liaoyio', sha: 'dev', path }}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <Mdx
          components={{
            ...defaultComponents,
            Popup,
            PopupContent,
            PopupTrigger,
            Tabs,
            Tab,
            TypeTable,
            AutoTypeTable,
            Accordion,
            Accordions,
            blockquote: Callout as unknown as FC<ComponentProps<'blockquote'>>,
          }}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: { params: Promise<{ slug?: string[] }> }) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const __metadata = metadataImage.withImage(page.slugs, {
    title: page.data.title,
    description: page.data.description ?? 'The library for building documentation sites',
    openGraph: { url: `/docs/${page.slugs.join('/')}` },
  }) as MetadataProps;

  return createMetadata(__metadata);
}

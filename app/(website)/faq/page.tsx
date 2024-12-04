import Link from 'next/link';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  ClientOnly
} from '@/components/ui';
import { createMetadata } from '@/utils/metadata';

export const metadata = createMetadata({
  title: 'FAQ | PearAi',
  description: 'Frequently Asked Questions',
  canonical: '/faq',
});

export default function FAQPage() {
  return (
    <section className="mx-auto mt-36 flex w-full flex-col items-center px-4 pb-12">
      <div className="mb-16 text-center">
        <h2
          className="text-primary-700 mb-4 whitespace-pre-line text-3xl font-bold"
          data-aos="fade-up"
        >
          Frequently Asked Questions
        </h2>
        <p className="whitespace-pre-line text-base text-gray-600" data-aos="fade-up">
          Can&apos;t find the answer you&apos;re looking for? Ask us directly in our{' '}
          <Link className="underline" target="_blank" href="https://discord.gg/AKy5FmqCkF">
            Discord
          </Link>
          or through
          <a href="mailto:pear@trypear.ai" className="underline">
            email
          </a>
          .
        </p>
        <div className="mb-4 mt-6 max-w-3xl text-center" data-aos="fade-up">
          <h3 className="text-primary-700 mb-4 text-2xl font-bold">Why PearAI?</h3>
          <p className="mb-4 text-base leading-relaxed text-gray-600">
            You just want to be able to make what you want, fast. PearAI gets you there.
          </p>
          <p className="text-base leading-relaxed text-gray-600">
            The AI tooling space is moving too quickly for most to keep up with. One day, product X
            is best for code generation; the next day, it’s product Y. PearAI natively integrates
            the best-in-market AI tools for each aspect of coding with AI (tooling for code
            generation, LLM, search, codebase knowledge, debugging, etc.), so you can just focus on
            making what you want.
          </p>
        </div>
        <div className="mb-4 mt-6 max-w-3xl text-center" data-aos="fade-up">
          <h3 className="text-primary-700 mb-4 text-2xl font-bold"></h3>
        </div>
      </div>
      <Accordion type="single" collapsible className="w-full max-w-3xl space-y-4 px-8">
        {faqData.map((item) => (
          <AccordionItem key={item.id} value={item.id} id={item.id}>
            <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="whitespace-pre-line text-sm text-gray-600">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

type FAQItem = {
  id: string;
  question: string;
  answer: JSX.Element;
};

const faqData: FAQItem[] = [
  {
    id: 'name',
    question: 'Why is it called PearAI ?',
    answer: <p>Pair programming... Pear Programming... PearAI! 🍐💡</p>,
  },
  {
    id: 'competitors',
    question: 'Why PearAI over competitors ?',
    answer: (
      <div>
        <p>Over using vanilla LLM’s:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <b>Codebase Knowledge:</b> PearAI has knowledge, or context, of your codebase achieved
            through RAG (Retrieval Augmented Generation), and other integrated features that will
            make your AI coding experience seamless.
          </li>
        </ul>
        <p>Over other extensions:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <b>No AI model vendor lock-in for higher quality code generation.</b> We guarantee you
            we use the best model for your use case based on the most up-to-date leaderboards.
          </li>
          <li>
            <b>User Experience:</b> As a complete IDE rather than just an extension, PearAI provides
            a more integrated and refined coding environment. This allows for smoother workflows and
            more intuitive interactions when coding with AI.
          </li>
        </ul>
        <p>Over other AI Code Editors:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <b>Different:</b> Competitors are approaching the huge task of coding with AI in a
            one-size-fits-all manner. Building for the future, PearAI has PearAI Inventory, which
            integrates the best tools for each part of the AI tech stack (chat assistant, code
            generation, search, collaboration, memory, etc.) into a unified, seamless user
            experience. Leading tools for each part changes rapidly, but individually beat each part
            of the monolith approach to coding with AI. With PearAI, we ensure you have the
            best-on-market experience of coding with AI at any given time.
          </li>
        </ul>
        <p>
          Last but not least: We are fully transparent and Open Source. Anyone can see, review, and
          contribute to our code. This allows for a community-driven product, mitigates privacy
          concerns that other similar tools face, and provides a faster development cycle thanks to
          our community. We want PearAI to be a culture. Read more:
          <Link href="/blog/why-open-source" className="text-primary-600 hover:underline">
            Why Open Source Matters for AI Code Editors
          </Link>
          .
        </p>
      </div>
    ),
  },
  {
    id: 'privacy',
    question: 'Does PearAI store my code ?',
    answer: (
      <p>
        No. All codebase indexing occurs and remains strictly local on your machine (
        <ClientOnly>
          <Link
            target="_blank"
            className="underline underline-offset-4"
            href="https://github.com/trypear/pearai-submodule/tree/main/core/indexing"
          >
            source
          </Link>
        </ClientOnly>

        ). Our servers never store any of your code. Additionally, we maintain a zero-data retention
        policy with our primary LLM cloud provider, Anthropic, ensuring they also neither store nor
        train on your code.
      </p>
    ),
  },
  {
    id: 'contribute',
    question: 'How can I contribute to PearAI ?',
    answer: (
      <p>
        See the contributor&apos;s section:
        <Link className="underline" target="_blank" href="/docs/contributors">
          Contributing 101
        </Link>
        .
      </p>
    ),
  },
];

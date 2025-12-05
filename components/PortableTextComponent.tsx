// components/PortableTextComponents.tsx
import { urlFor } from '@/sanity/lib/image'
import { PortableTextComponents } from '@portabletext/react'
import Image from 'next/image'

export const portableTextComponents: PortableTextComponents = {
  // ---------- BLOCK TYPES (HEADINGS, PARAGRAPHS, QUOTES) ----------
  block: {
    h1: ({ children }) => (
      <h1
        className="
          text-4xl md:text-6xl
          font-black
          leading-tight
          tracking-tight
          mb-8 mt-4
        "
      >
        {children}
      </h1>
    ),

    h2: ({ children }) => (
      <h2
        className="
          text-3xl md:text-4xl
          font-bold
          leading-snug
          tracking-tight
          mt-10 mb-6
        "
      >
        {children}
      </h2>
    ),

    h3: ({ children }) => (
      <h3
        className="
          text-2xl md:text-3xl
          font-semibold
          leading-snug
          mt-8 mb-4
        "
      >
        {children}
      </h3>
    ),

    h4: ({ children }) => (
      <h4
        className="
          text-xl md:text-2xl
          font-semibold
          uppercase
          tracking-wide
          mt-6 mb-3
        "
      >
        {children}
      </h4>
    ),

    blockquote: ({ children }) => (
      <blockquote
        className="
          border-l-4 border-neutral-400
          pl-5
          ml-1
          my-6
          text-lg md:text-2xl
          leading-relaxed
          italic
          text-neutral-200/90
        "
      >
        {children}
      </blockquote>
    ),

    normal: ({ children }) => (
      <p
        className="
          text-lg md:text-xl
          leading-relaxed
          mb-5
        "
      >
        {children}
      </p>
    ),
  },

  // ---------- IMAGES ----------
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref && !value?.asset?._id) return null
      const url = urlFor(value)?.width(1600).fit('max').url()

      return (
        <figure className="my-10">
          <Image
            src={url}
            alt={value.alt || 'Blog image'}
            width={1600}
            height={900}
            className="w-full object-contain"
          />
          {value.caption && (
            <figcaption className="mt-3 text-sm md:text-base text-neutral-400">
              {value.caption}
            </figcaption>
          )}
        </figure>
      )
    },
  },

  // ---------- LISTS ----------
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-7 space-y-2 mb-5 text-lg md:text-xl">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-7 space-y-2 mb-5 text-lg md:text-xl">
        {children}
      </ol>
    ),
  },

  // ---------- INLINE MARKS ----------
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="px-1.5 py-0.5 rounded bg-neutral-900/60 text-sm md:text-base">
        {children}
      </code>
    ),
    link: ({ children, value }) => {
      const href = value?.href || '#'
      const isExternal = href?.startsWith('http')
      return (
        <a
          href={href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className="underline underline-offset-4 decoration-purple-400 hover:decoration-purple-300"
        >
          {children}
        </a>
      )
    },
  },
}

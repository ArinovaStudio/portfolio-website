// query.ts
export const queries = {
  posts: `*[_type == "post"]{
    _id,
    title,
    slug,
    author->{name, image},
    mainImage,
    publishedAt,
    categories[]->{title},
    body
  }`,

  portfolio: `*[_type == "portfolio"]{
    _id,
    title,
    slug,
    mainImage,
    description,
    technologies,
    link
  }`,

  products: `*[_type == "product"]{
    _id,
    name,
    slug,
    mainImage,
    description,
    features,
    price,
    link
  }`,

  designGallery: `*[_type == "designGallery"]{
    _id,
    title,
    images,
    description
  }`,

  caseStudies: `*[_type == "caseStudy"]{
    _id,
    title,
    slug,
    mainImage,
    summary,
    challenge,
    solution,
    result
  }`,
};


// query.ts
export const slug = {
  postBySlug: (slug: string) => `*[_type == "post" && slug.current == "${slug}"][0]{
    _id,
    title,
    slug,
    author->{name, image},
    mainImage,
    publishedAt,
    categories[]->{title},
    body
  }`,

  portfolioBySlug: (slug: string) => `*[_type == "portfolio" && slug.current == "${slug}"][0]{
    _id,
    title,
    slug,
    mainImage,
    description,
    technologies,
    link
  }`,

  productBySlug: (slug: string) => `*[_type == "product" && slug.current == "${slug}"][0]{
    _id,
    name,
    slug,
    mainImage,
    description,
    features,
    price,
    link
  }`,

  designGalleryBySlug: (slug: string) => `*[_type == "designGallery" && slug.current == "${slug}"][0]{
    _id,
    title,
    images,
    description
  }`,

  caseStudyBySlug: (slug: string) => `*[_type == "caseStudy" && slug.current == "${slug}"][0]{
    _id,
    title,
    slug,
    mainImage,
    summary,
    challenge,
    solution,
    result
  }`,
};

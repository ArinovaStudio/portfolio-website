// query.ts
export const queries = {
  posts: `*[_type == "post"]{
    title,
    slug,
    author->{name, image},
    mainImage,
    miniDescription,
    publishedAt
  }`,

  portfolio: `*[_type == "portfolio"]{
    _id,
    title,
    slug,
    mainImage,
    category,
    hostedUrl,
    miniDescription
  }`,

  products: `*[_type == "products"]{
    title,
    slug,
    mainImage,
    url
  }`,

designGallery: `
*[_type == "designGallery"] | order(_createdAt asc) {
  _id,
  image{
    asset->{_id, url, metadata {dimensions}},
    alt
  },
  _id,
  width,
  height,
  mobileWidth,
  mobileHeight,
  left,
  top,
  mobileLeft,
  mobileTop
}`,

  caseStudies: `*[_type == "caseStudies"]{
  _id,
  title,
  slug,
  mainImage,
  miniDescription,
  alt,
  businessName,
  percentage,
  stats
  }`,
};


// query.ts
export const slug = {
  postBySlug: (slug: string) => `*[_type == "post" && slug.current == "${slug}"][0]{
    title,
    slug,
    author->{name, image},
    mainImage,
    miniDescription,
    publishedAt,
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

  productBySlug: (slug: string) => `*[_type == "products" && slug.current == "${slug}"][0]{
    title,
    slug,
    mainImage,
    url,
    body,
    miniDescription,
    publishedAt
  }`,

  caseStudyBySlug: (slug: string) => `*[_type == "caseStudies" && slug.current == "${slug}"][0]{
    title,
  slug,
  mainImage,
  miniDescription,
  alt,
  businessName,
  percentage,
  stats,
  body,
  publishedAt
  }`,
};

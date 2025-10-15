import { defineField, defineType } from "sanity";

// Helper to generate random positions with minimum spacing
const generatePositions = (existing = [], spacing = 15) => {
  let left, top;
  let attempts = 0;
  do {
    left = Math.floor(Math.random() * 80);
    top = Math.floor(Math.random() * 80);
    attempts++;
    // Make sure it's at least `spacing` apart from existing positions
  } while (
    existing.some(
      (pos) =>
        Math.abs(pos.left - left) < spacing && Math.abs(pos.top - top) < spacing
    ) &&
    attempts < 20
  );
  return { left: `${left}%`, top: `${top}%` };
};

export const designType = defineType({
  name: "designGallery",
  title: "Design Gallery",
  type: "document",
  fields: [
        defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true, // allows cropping and focal points
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "width",
      title: "Width",
      type: "string",
      description: "Desktop width (e.g., 280px)",
      initialValue: () => `${Math.floor(Math.random() * 100 + 200)}px`,
    }),
    defineField({
      name: "height",
      title: "Height",
      type: "string",
      description: "Desktop height (e.g., 380px)",
      initialValue: () => `${Math.floor(Math.random() * 100 + 300)}px`,
    }),
    defineField({
      name: "mobileWidth",
      title: "Mobile Width",
      type: "string",
      initialValue: (doc) => `${Math.floor(parseInt(doc.width || "280px") / 2)}px`,
    }),
    defineField({
      name: "mobileHeight",
      title: "Mobile Height",
      type: "string",
      initialValue: (doc) => `${Math.floor(parseInt(doc.height || "380px") / 2)}px`,
    }),
    defineField({
      name: "left",
      title: "Left Position",
      type: "string",
      initialValue: () => generatePositions().left,
    }),
    defineField({
      name: "top",
      title: "Top Position",
      type: "string",
      initialValue: () => generatePositions().top,
    }),
    defineField({
      name: "mobileLeft",
      title: "Mobile Left",
      type: "string",
      initialValue: () => generatePositions().left,
    }),
    defineField({
      name: "mobileTop",
      title: "Mobile Top",
      type: "string",
      initialValue: () => generatePositions().top,
    }),
  ],
  preview: {
    select: {
      title: "src",
      media: "src",
    },
  },
});

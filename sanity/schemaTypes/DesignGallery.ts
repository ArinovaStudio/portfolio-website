import { defineField, defineType } from "sanity";

// Helper to generate random positions with minimum spacing
const generatePositions = (existing = [], spacing = 15) => {
  let left, top;
  let attempts = 0;
  do {
    left = Math.floor(Math.random() * 80);
    top = Math.floor(Math.random() * 80);
    attempts++;
  } while (
    existing.some(
      (pos) =>
        Math.abs(pos.left - left) < spacing && Math.abs(pos.top - top) < spacing
    ) &&
    attempts < 20
  );
  return { left: `${left}%`, top: `${top}%` };
};

// Helper: random size based on orientation
const getRandomSize = (orientation: "landscape" | "portrait" | "square") => {
  // base range you can tweak
  const baseMin = 220;
  const baseMax = 360;

  const rand = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  if (orientation === "landscape") {
    const width = rand(baseMin + 60, baseMax + 80); // wider
    const height = rand(baseMin, baseMax - 40);
    return { width: `${width}px`, height: `${height}px` };
  }

  if (orientation === "portrait") {
    const width = rand(baseMin - 40, baseMax - 20);
    const height = rand(baseMin + 60, baseMax + 80); // taller
    return { width: `${width}px`, height: `${height}px` };
  }

  // square
  const side = rand(baseMin, baseMax);
  return { width: `${side}px`, height: `${side}px` };
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
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),

    // NEW: orientation field
    defineField({
      name: "orientation",
      title: "Orientation",
      type: "string",
      options: {
        list: [
          { title: "Landscape", value: "landscape" },
          { title: "Portrait", value: "portrait" },
          { title: "Square", value: "square" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
      initialValue: () => {
        const options = ["landscape", "portrait", "square"] as const;
        const random = options[Math.floor(Math.random() * options.length)];
        return random;
      },
    }),

    defineField({
      name: "width",
      title: "Width",
      type: "string",
      description: "Desktop width (e.g., 280px)",
      initialValue: (doc) => {
        const orientation =
          (doc?.orientation as "landscape" | "portrait" | "square") ||
          "landscape";
        const { width } = getRandomSize(orientation);
        return width;
      },
    }),

    defineField({
      name: "height",
      title: "Height",
      type: "string",
      description: "Desktop height (e.g., 380px)",
      initialValue: (doc) => {
        const orientation =
          (doc?.orientation as "landscape" | "portrait" | "square") ||
          "landscape";
        const { height } = getRandomSize(orientation);
        return height;
      },
    }),

    defineField({
      name: "mobileWidth",
      title: "Mobile Width",
      type: "string",
      initialValue: (doc) => {
        const w = parseInt((doc?.width as string) || "280", 10);
        return `${Math.floor(w * 0.6)}px`; // slightly more than half for better visibility
      },
    }),

    defineField({
      name: "mobileHeight",
      title: "Mobile Height",
      type: "string",
      initialValue: (doc) => {
        const h = parseInt((doc?.height as string) || "380", 10);
        return `${Math.floor(h * 0.6)}px`;
      },
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
      media: "image",
      orientation: "orientation",
    },
    prepare(selection) {
      const { media, orientation } = selection;
      return {
        title: orientation ? `Design – ${orientation}` : "Design",
        media,
      };
    },
  },
});

"use client";

import { useEffect, useState, useTransition } from "react";
import { PortableText } from "@portabletext/react";
import { useParams, useRouter } from "next/navigation";
import { fetchData } from "@/sanity/lib/fetch";
import { ContactOverlay } from "@/elements/ContactOverlay";
import { PreviewDrawer } from "@/elements/PreviewDrawer";
import Link from "next/link";
import { LucideArrowLeft } from "lucide-react";
import { portableTextComponents } from "@/components/PortableTextComponent";

type SanityImage = {
  asset?: {
    url?: string;
  };
  alt?: string;
};

type PortfolioItem = {
  _id: string;
  title: string;
  slug?: { current: string };
  miniDescription?: string;
  category?: string;
  hostedUrl?: string;
  mainImage?: SanityImage;
  publishedAt?: string;
  body?: any;
};

interface PortfolioDetailsProps {
  slug: string;
}

export default function PortfolioDetailsPage() {
  const slug = useParams().slug as string;
  const [project, setProject] = useState<PortfolioItem | null>(null);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const [contactFormPopUp, setContactFormPopUp] = useState(false);

  const router = useRouter();

  useEffect(() => {
    startTransition(async () => {
      try {
        setError(null);
        const data = await fetchData("portfolioBySlug", slug);
        const item = Array.isArray(data) ? data[0] : data;
        setProject(item || null);
      } catch (err) {
        console.error(err);
        setError("Failed to load project.");
      }
    });
  }, [slug]);

  const formattedDate = project?.publishedAt
    ? new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "short",
        day: "2-digit",
      }).format(new Date(project.publishedAt))
    : null;

  const handleContact = () => {
    setContactFormPopUp(true);
  };
  const handleView = () => {
    if (project?.hostedUrl) {
      setPreviewUrl(project.hostedUrl);
      setIsPreviewOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#101010] text-neutral-50">
      <ContactOverlay
        open={contactFormPopUp}
        onClose={() => setContactFormPopUp(false)}
      />

      <main className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-8 lg:py-12">
        {/* HEADER */}
        <header className="mb-10 flex items-center justify-between">
          <div className="space-y-2 w-full">
            <div onClick={() => router.back()} className="flex gap-2 w-full justify-between items-center">
            <p className="flex gap-2 hover:scale-110 cursor-pointer transition-all"><LucideArrowLeft />Back</p>  
            <div className="">
                          <p className="text-[11px] uppercase tracking-[0.28em] text-neutral-500">
              PORTFOLIO
            </p>
            <p className="text-xs sm:text-sm text-neutral-400">
              A closer look at one of our aweasome projects.
            </p>
            </div>
            </div>
          </div>

          {isPending && (
            <span className="text-[11px] text-neutral-500">Loading…</span>
          )}
        </header>

        {/* TITLE + IMAGE */}
        <section className="space-y-10">
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight">
              {project?.title || "Project title coming soon"}
            </h1>
          </div>

          {/* HERO IMAGE */}
          <div>
            {project?.mainImage?.asset?.url ? (
              <img
                src={project.mainImage.asset.url}
                alt={project.mainImage.alt || project.title}
                className="w-full h-[260px] sm:h-[340px] lg:h-[420px] object-cover rounded-none"
              />
            ) : (
              <div className="w-full h-[260px] sm:h-[340px] lg:h-[420px] bg-black flex items-center justify-center text-neutral-500 uppercase tracking-[0.22em]">
                Visual coming soon
              </div>
            )}
          </div>

          {/* MAIN CONTENT LAYOUT */}
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)] items-start">
            {/* LEFT CONTENT */}
            <article className="space-y-8">
              {/* CATEGORY ABOVE BODY (NEW UPDATE) */}
              {project?.category && (
                <div>
                  <p className="text-[12px] uppercase tracking-[0.24em] text-black bg-white px-4 py-2 w-fit font-medium">
                    {project.category}
                  </p>
                </div>
              )}

              {/* BODY CONTENT */}
              {project?.body ? (
                <div className="max-w-none">
                  <PortableText value={project.body} components={portableTextComponents}  />
                </div>
              ) : (
                <p className="text-sm sm:text-base text-neutral-500">
                  Detailed content for this case study will be available soon.
                </p>
              )}
            </article>

            {/* RIGHT SIDEBAR */}
            <aside className="space-y-8">
              {/* MINI INFO */}
              <div className="space-y-1">
                <p className="text-base uppercase tracking-[0.24em] text-neutral-500">
                  Project Overview
                </p>
                <div className="h-px w-10 bg-neutral-600" />
              </div>

              <div className="space-y-4 text-sm sm:text-base text-neutral-400">
                <p className="-mt-5">{project?.miniDescription}</p>
                {formattedDate && (
                  <div className="space-y-1">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-neutral-500">
                      Published
                    </p>
                    <p>{formattedDate}</p>
                  </div>
                )}
              </div>

              {/* CTA BUTTONS (UPDATED — VIEW IS NOW PRIMARY) */}
              <div className="space-y-3 pt-4">
                {/* PRIMARY BUTTON → VIEW */}
                <button
                  onClick={handleView}
                  disabled={!project?.hostedUrl}
                  className="w-full px-5 py-3 bg-white text-black text-sm tracking-[0.26em] uppercase rounded-none hover:bg-neutral-200 disabled:opacity-50"
                >
                  View
                </button>

                {/* SECONDARY BUTTON → CONTACT US */}
                <button
                  onClick={handleContact}
                  className="w-full px-5 py-3 text-white border border-neutral-600 text-sm tracking-[0.26em] uppercase rounded-none hover:bg-neutral-900"
                >
                  Contact Us
                </button>
              </div>

              {/* FOOTNOTE */}
              <p className="text-sm text-neutral-500 leading-relaxed">
                Have a similar idea? Tell us about your project and let’s build
                something exceptional.
              </p>
            </aside>
          </div>
        </section>
        <PreviewDrawer
          open={isPreviewOpen}
          url={previewUrl}
          onClose={() => setIsPreviewOpen(false)}
          title={project?.title || "Project title coming soon"}
        />
      </main>
    </div>
  );
}

"use client";

import React, { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { urlFor } from "@/sanity/lib/image";
import { useRouter } from "next/navigation";
const SQRT_5000 = Math.sqrt(5000);

interface PortfolioItem {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  miniDescription: string;
  category: string;
  hostedUrl?: string;
  mainImage: any;
}

interface CardProps {
  project: PortfolioItem;
  position: number;
  handleMove: (steps: number) => void;
  cardSize: number;
}

const Card: React.FC<CardProps> = ({
  project,
  position,
  handleMove,
  cardSize,
}) => {
  const isCenter = position === 0;

  // Replace with your Sanity image helper
  const imageUrl = urlFor(project.mainImage).width(1200).url();

    const router = useRouter()
  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer overflow-hidden transition-all duration-500 ease-in-out",
        isCenter
          ? "z-20 scale-110"
          : "z-0 scale-90 border border-border bg-black"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(
          50px 0%,
          calc(100% - 50px) 0%,
          100% 50px,
          100% 100%,
          calc(100% - 50px) 100%,
          50px 100%,
          0 100%,
          0 0
        )`,
        transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter
          ? "0px 10px 30px rgba(0,0,0,0.25)"
          : "0px 4px 10px rgba(0,0,0,0.08)",
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-border"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2,
        }}
      />

      {isCenter ? (
        <>
          <img
            src={imageUrl}
            alt={project.title}
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/45" />

          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <span className="mb-3 inline-block rounded-full border border-white/30 px-3 py-1 text-xs uppercase tracking-widest">
              {project.category}
            </span>

            <h2 className="text-base font-bold sm:text-2xl">
              {project.title}
            </h2>

          {project.slug && (
            <div
              onClick={(e) => router.push(`/portfolio/${project.slug}`)}
              className="inline-flex mt-6 w-fit items-center border px-4 py-2 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Visit
            </div>
          )}

          </div>
        </>
      ) : (
        <div className="flex h-full flex-col justify-between p-8">
          <div>
            <span className="mb-4 inline-block rounded-full border px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
              {project.category}
            </span>

            <h3 className="mb-4 text-xl font-bold sm:text-2xl">
              {project.title}
            </h3>

            <p className="line-clamp-5 text-sm text-muted-foreground sm:text-base">
              {project.miniDescription}
            </p>
          </div>

          {project.slug && (
            <div
              onClick={(e) => router.push(`/portfolio/${project.slug}`)}
              className="inline-flex w-fit items-center border px-4 py-2 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Visit Project
            </div>
          )}
        </div>
      )}
    </div>
  );
};

interface PortfolioCardsProps {
  data: PortfolioItem[];
}

export const PortfolioCards: React.FC<PortfolioCardsProps> = ({ data }) => {
  const [cardSize, setCardSize] = useState(565);
  const [projects, setProjects] = useState<PortfolioItem[]>(data);

  useEffect(() => {
    setProjects(data);
  }, [data]);

  const handleMove = useCallback((steps: number) => {
    setProjects((prev) => {
      const updated = [...prev];

      if (steps > 0) {
        for (let i = 0; i < steps; i++) {
          const first = updated.shift();

          if (first) {
            updated.push(first);
          }
        }
      } else {
        for (let i = 0; i < Math.abs(steps); i++) {
          const last = updated.pop();

          if (last) {
            updated.unshift(last);
          }
        }
      }

      return updated;
    });
  }, []);

  useEffect(() => {
    const updateSize = () => {
      const isDesktop = window.matchMedia("(min-width: 640px)").matches;

      setCardSize(isDesktop ? 420 : 300);
    };

    updateSize();

    window.addEventListener("resize", updateSize);

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  useEffect(() => {
    if (projects.length <= 1) return;

    const interval = setInterval(() => {
      handleMove(1);
    }, 3000);

    return () => clearInterval(interval);
  }, [handleMove, projects.length]);

  if (!projects?.length) return null;

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: 720 }}
    >
      {projects.map((project, index) => {
        const position =
          projects.length % 2
            ? index - (projects.length - 1) / 2
            : index - projects.length / 2;

        return (
          <Card
            key={project._id}
            project={project}
            position={position}
            handleMove={handleMove}
            cardSize={cardSize}
          />
        );
      })}

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-3">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center border transition-colors",
            "bg-background hover:bg-primary hover:text-primary-foreground"
          )}
        >
          <ChevronLeft />
        </button>

        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center border transition-colors",
            "bg-background hover:bg-primary hover:text-primary-foreground"
          )}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};
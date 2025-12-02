"use client";

import React from "react";

type PreviewDrawerProps = {
  open: boolean;
  url?: string | null;
  onClose: () => void;
  title: string
};

export function PreviewDrawer({ open, url, onClose, title }: PreviewDrawerProps) {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // prevent click inside panel from closing
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleOpenNewTab = () => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      className={`
        w-full
        fixed inset-0 z-40
        transition-opacity duration-300
        ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
      `}
      onClick={handleBackdropClick}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Panel */}
      <div
        className={`
          absolute inset-x-0 bottom-0
          h-[95vh]
          flex justify-center
          transform transition-transform duration-300 ease-out
          ${open ? "translate-y-0" : "translate-y-full"}
        `}
      >
        <div
          className="
            w-full max-w-8xl
            bg-[#101010]
            border-t border-neutral-800
            rounded-none
            flex flex-col
          "
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-neutral-800">
            <div className="min-w-0">
              <p className="text-sm uppercase tracking-[0.24em] text-neutral-200">
                Live preview
              </p>
                <p className="text-xs text-neutral-500">
                  {title}
                </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="
                  text-[11px] uppercase tracking-[0.22em]
                  text-neutral-400
                  hover:text-neutral-100
                "
              >
                Close
              </button>
            </div>
          </div>

          {/* Body: iframe preview */}
          <div className="flex-1 bg-black">
            {url ? (
              <iframe
                src={url}
                className="w-full h-full border-none"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-xs sm:text-sm text-neutral-500">
                Hosted URL is not set for this project.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

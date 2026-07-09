"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

/**
 * ExpandableCards — grid kartu yang bisa diklik untuk buka detail
 * dengan animasi shared-layout (mirip Aceternity Expandable Card),
 * diadaptasi manual (tanpa CLI shadcn) supaya konsisten style project ini.
 *
 * items: [{ title, subtitle, description, accent, ctaLabel, ctaHref }]
 */
export function ExpandableCards({ items }) {
  const [active, setActive] = useState(null);
  const id = useId();
  const ref = useRef(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 z-50 grid place-items-center p-4">
            <motion.button
              key="close-button"
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-white text-ink lg:hidden"
              onClick={() => setActive(null)}
              aria-label="Tutup"
            >
              ✕
            </motion.button>

            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="flex w-full max-w-md flex-col overflow-hidden rounded-2xl bg-base"
            >
              <motion.div
                layoutId={`visual-${active.title}-${id}`}
                className={`relative h-64 w-full bg-gradient-to-br ${active.accent}`}
              >
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)",
                    backgroundSize: "18px 18px",
                  }}
                />
              </motion.div>

              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-display text-2xl text-ink"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`subtitle-${active.subtitle}-${id}`}
                      className="text-ink-muted text-sm mt-1"
                    >
                      {active.subtitle}
                    </motion.p>
                  </div>
                  {active.ctaHref && (
                    <motion.a
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      href={active.ctaHref}
                      target="_blank"
                      rel="noreferrer"
                      className="shrink-0 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white hover:bg-ink/90 transition-colors"
                    >
                      {active.ctaLabel ?? "Dengar"}
                    </motion.a>
                  )}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.15 }}
                  className="mt-4 text-sm text-ink-muted leading-relaxed"
                >
                  {active.description}
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {items.map((item) => (
          <motion.div
            layoutId={`card-${item.title}-${id}`}
            key={item.title}
            onClick={() => setActive(item)}
            className="cursor-pointer rounded-xl border border-black/10 bg-base p-5 hover:shadow-md transition-shadow"
          >
            <motion.div
              layoutId={`visual-${item.title}-${id}`}
              className={`h-32 rounded-lg mb-4 bg-gradient-to-br ${item.accent}`}
            />
            <motion.h3
              layoutId={`title-${item.title}-${id}`}
              className="font-display text-lg text-ink"
            >
              {item.title}
            </motion.h3>
            <motion.p
              layoutId={`subtitle-${item.subtitle}-${id}`}
              className="text-sm text-ink-muted mt-2"
            >
              {item.subtitle}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </>
  );
}

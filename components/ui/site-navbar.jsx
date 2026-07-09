"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Users, Sparkles } from "lucide-react";
import { useState } from "react";

export const SiteNavbar = ({ navItems, mobileGroups, className }) => {
  const [open, setOpen] = useState(false);
  const groups = mobileGroups || [{ label: "Menu", items: navItems }];

  return (
    <>
      <div
        className={cn(
          "sticky top-0 z-[5000] w-full",
          className
        )}
      >
      <div className="border-b border-black/10 bg-white/50 backdrop-blur-2xl">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Buka menu"
            className="sm:hidden flex items-center justify-center h-9 w-9 rounded-full hover:bg-black/5 transition-colors text-ink"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>

          <a href="#top" className="flex items-center gap-2.5">
            <span className="h-8 w-8 rounded-full bg-gradient-to-br from-remix-from via-creator-to to-leadis-to flex items-center justify-center text-white font-display font-black text-sm">
              S
            </span>
            <span className="font-display font-bold text-ink text-xs hidden sm:block">
              SOPAN TEAM
            </span>
          </a>
        </div>

        <div className="hidden sm:flex items-center gap-6">
          {navItems.map((item, idx) => (
            <a
              key={`nav-${idx}`}
              href={item.link}
              className="text-xs text-ink-muted hover:text-ink transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <span className="hidden md:flex items-center gap-1.5 text-xs text-ink-muted border border-black/10 rounded-full px-3 py-1.5">
            <Users size={13} />
            180+
          </span>
          <span className="hidden md:flex items-center gap-1.5 text-xs text-ink-muted border border-black/10 rounded-full px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Rekrutmen buka
          </span>
          <a
            href="#gabung"
            className="flex items-center gap-1 text-sm font-medium border border-black/10 text-white bg-ink px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
          >
            <Sparkles size={14} />
            Gabung
          </a>
        </div>
      </div>
      </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="sm:hidden fixed inset-x-0 top-[57px] bottom-0 z-[4999] bg-white overflow-y-auto"
          >
            <div className="flex flex-col px-6 pt-6 pb-10">
              {groups.map((group, gIdx) => (
                <div key={`group-${gIdx}`} className={gIdx > 0 ? "mt-8" : ""}>
                  <span className="text-xs tracking-[0.3em] uppercase text-ink-dim mb-3 block">
                    {group.label}
                  </span>
                  <div className="flex flex-col">
                    {group.items.map((item, idx) => (
                      <a
                        key={`mnav-${gIdx}-${idx}`}
                        href={item.link}
                        onClick={() => setOpen(false)}
                        className="font-body font-semibold tracking-tight text-3xl text-ink py-1.5 transition-colors hover:text-ink-muted"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              ))}

              <div className="flex items-center gap-3 mt-8">
                <span className="flex items-center gap-1.5 text-xs text-ink-muted border border-black/10 rounded-full px-3 py-1.5">
                  <Users size={13} />
                  180+
                </span>
                <span className="flex items-center gap-1.5 text-xs text-ink-muted border border-black/10 rounded-full px-3 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Rekrutmen buka
                </span>
              </div>

              <a
                href="#gabung"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-1.5 text-sm font-medium text-white bg-ink px-4 py-3 rounded-full hover:opacity-90 transition-opacity mt-6"
              >
                <Sparkles size={14} />
                Gabung
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

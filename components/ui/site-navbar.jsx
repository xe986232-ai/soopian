"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Users, Sparkles } from "lucide-react";
import { useState } from "react";

export const SiteNavbar = ({ navItems, className }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "sticky top-0 z-[5000] w-full border-b border-black/10 bg-white/80 backdrop-blur-xl",
        className
      )}
    >
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
            <span className="font-display font-bold text-ink text-sm hidden sm:block">
              SOPAN TEAM
            </span>
          </a>
        </div>

        <div className="hidden sm:flex items-center gap-6">
          {navItems.map((item, idx) => (
            <a
              key={`nav-${idx}`}
              href={item.link}
              className="text-sm text-ink-muted hover:text-ink transition-colors"
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

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="sm:hidden overflow-hidden border-t border-black/10"
          >
            <div className="flex flex-col px-4 py-3 gap-1">
              {navItems.map((item, idx) => (
                <a
                  key={`mnav-${idx}`}
                  href={item.link}
                  onClick={() => setOpen(false)}
                  className="text-sm text-ink-muted hover:text-ink py-2 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

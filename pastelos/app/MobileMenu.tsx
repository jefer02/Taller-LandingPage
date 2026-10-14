"use client";

import { useState } from "react";

export default function MobileMenu({ links }: { links: string[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="flex h-10 w-10 items-center justify-center rounded-full text-brand-dark hover:bg-blush"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        >
          {open ? (
            <path d="M6 6l12 12M18 6 6 18" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>

      {open && (
        <nav className="absolute inset-x-0 top-full z-30 border-t border-brand/10 bg-cream px-6 pb-5 pt-2 shadow-lg">
          <ul className="grid grid-cols-2 gap-x-4 sm:grid-cols-3">
            {links.map((l, i) => (
              <li key={i}>
                <a
                  href="#"
                  onClick={() => setOpen(false)}
                  className="block border-b border-brand/10 py-3 font-semibold text-brand-dark hover:text-brand"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="mt-3 block py-2 text-center text-sm font-semibold text-cocoa min-[400px]:hidden"
          >
            Login/Signup
          </a>
          <a
            href="#"
            className="mt-2 block rounded-full bg-brand-dark py-2.5 text-center font-display font-bold text-white"
          >
            ORDER NOW
          </a>
        </nav>
      )}
    </div>
  );
}

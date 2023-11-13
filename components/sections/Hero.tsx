"use client";

import clsx from "clsx";
import Link from "next/link";
import { motion } from "framer-motion";

import { poppins, atkinsonHyperlegible } from "@/lib/fonts";
import SocialButton from "@/components/shared/social-btn";

const HeroSection = () => {
  return (
    <div className="z-10 w-full max-w-xl py-11 flex flex-col justify-center items-center">
      <Link
        rel="noopener noreferrer"
        target="_blank"
        href="https://twitter.com/vigneshfixes/status/1723395461325951152"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={clsx(
            "flex p-4 py-2 border border-muted bg-black/80 dark:bg-white text-white dark:text-black rounded-full shadow-lg gap-2 mb-5 items-center",
            atkinsonHyperlegible.className,
          )}
        >
          <svg
            width="15"
            height="15"
            className="text-white dark:text-black"
            viewBox="0 0 1200 1227"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
              fill="currentColor"
            />
          </svg>
          Introducing Zero-Path
        </motion.p>
      </Link>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={clsx(
          "bg-gradient-to-br from-primary to-muted-foreground bg-clip-text text-center font-display text-3xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm [text-wrap:balance] md:text-5xl pb-2",
          poppins.className,
        )}
      >
        A Step toward faster development in Next.js
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="my-6 text-center text-gray-500 [text-wrap:balance] md:text-xl"
      >
        A starter template for Next.js with some opinionated libraries
        configured. Similar to{" "}
        <Link
          className="underline text-primary hover:text-primary/80 "
          href="https://precedent.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          precedent.dev
        </Link>{" "}
        but with different stack
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mx-auto mt-6 flex items-center justify-center space-x-5 "
      >
        <SocialButton icon="vercel" />
        <SocialButton icon="github" />
      </motion.div>
    </div>
  );
};

export default HeroSection;

"use client";

import clsx from "clsx";
import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { DEPLOY_URL } from "@/lib/constants";
import { poppins } from "@/lib/fonts";
import SocialButton from "@/components/shared/social-btn";

const HeroSection = () => {
  return (
    <div className="z-10 w-full max-w-xl py-11 flex flex-col justify-center items-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
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
        {/* <Button
          asChild
          className="group gap-2 text-sm shadow-xl text-white hover:text-black hover:bg-white rounded-full hover:shadow-lg border hover:border-muted-foreground border-primary"
        >
          <Link href={DEPLOY_URL} target="_blank" rel="noopener noreferrer">
            <svg
              className="h-4 w-4 group-hover:text-black"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 4L20 20H4L12 4Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <p>Deploy to Vercel</p>
          </Link>
        </Button> */}
        <SocialButton icon="vercel" />
        <SocialButton icon="github" />
      </motion.div>
    </div>
  );
};

export default HeroSection;

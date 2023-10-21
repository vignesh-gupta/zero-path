"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import SocialButton from "@/components/shared/social-btn";

const FooterSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="flex flex-col container py-4 gap-5 items-center"
    >
      <p className="text-muted-foreground">
        A Project by{" "}
        <Link
          className="hover:underline text-foreground hover:text-primary underline-offset-4"
          href="https://vigneshgupta.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vignesh Gupta
        </Link>
      </p>

      <div className="text-muted-foreground flex flex-col gap-3 items-center">
        <div className="flex gap-2 items-center">
          <SocialButton icon="github" className="rounded-md" />
          <div className="h-12 border" />
          <SocialButton icon="buymeacoffee" className="rounded-md" />
        </div>
      </div>
    </motion.div>
  );
};

export default FooterSection;

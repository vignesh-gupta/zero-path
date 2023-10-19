"use client";

import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { poppins } from "@/lib/fonts";
import { DEPLOY_URL } from "@/lib/constants";
import SocialButton from "../shared/social-btn";

const FeatureSection = () => {
  return (
    <div className="w-full">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={clsx(
          "text-xl md:text-2xl lg:text-3xl font-semibold text-primary text-center py-3",
          poppins.className,
        )}
      >
        Some Features
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((feature, i) => (
          <motion.div
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.1 },
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.1 * i },
            }}
            key={i}
            className="rounded-lg text-card-foreground bg-transparent border border-muted w-full shadow-lg flex flex-col hover:border-muted-foreground"
          >
            <div className="p-6 pt-12 flex justify-center items-center grow gap-2">
              {feature.description}
            </div>
            <div className="flex p-6 pt-0 flex-col items-center">
              <h3
                className={clsx(
                  "text-lg text-center font-medium mb-3",
                  poppins.className,
                )}
              >
                {feature.title}
              </h3>
              <p className="text-sm text-center">{feature.footer}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;

const features = [
  {
    title: "Single Click deployment",
    description: (
      <>
        {/* <Link href={DEPLOY_URL} target="_blank" rel="noopener noreferrer">
          <Image
            width={120}
            height={30}
            unoptimized
            src="https://vercel.com/button"
            alt="Vercel deploy button"
          />
        </Link> */}
        <SocialButton
          icon="vercel"
          className="rounded-md text-lg hover:bg-primary hover:text-white"
          text="Deploy"
        />
      </>
    ),
    footer: (
      <>
        Deploy your app with single click to
        <Link
          className="px-1 underline underline-offset-2"
          target="_blank"
          rel="noopener noreferrer"
          href="https://vercel.com"
        >
          Vercel
        </Link>
        and get the developer experience you deserve.
      </>
    ),
  },
  {
    title: "Secured Auth & Database",
    description: (
      <>
        <Link
          href="https://clerk.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            width={70}
            height={70}
            unoptimized
            src="/clerk.webp"
            alt="Vercel deploy button"
            className="object-cover bg-white rounded-full"
          />
        </Link>
        <p className="text-xl">+</p>
        <Link
          href="https://www.prisma.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            width={70}
            height={70}
            unoptimized
            src="/prisma.svg"
            alt="Vercel deploy button"
            className="object-cover bg-white rounded-full p-1"
          />
        </Link>
      </>
    ),
    footer: (
      <>
        Zero path is here with authentication and database via
        <Link
          className="px-1 underline underline-offset-2"
          target="_blank"
          rel="noopener noreferrer"
          href="https://clerk.com/"
        >
          Clerk
        </Link>
        +
        <Link
          className="px-1 underline underline-offset-2"
          target="_blank"
          rel="noopener noreferrer"
          href="https://prisma.io/"
        >
          Prisma ORM
        </Link>
      </>
    ),
  },

  {
    title: "Hooks, utilities, and more",
    description: (
      <>
        <Image
          width={100}
          height={100}
          unoptimized
          src="/react-hook.webp"
          alt="Vercel deploy button"
          className="object-cover rounded-full"
        />
      </>
    ),
    footer: (
      <>
        Zero-Path offers a collection of hooks, utilities, and many more...
        {/* TODO:Setup @vercel/og */}
        {/* <Link
          className="px-1 underline underline-offset-2"
          target="_blank"
          rel="noopener noreferrer"
          href="https://vercel.com/docs/functions/edge-functions/og-image-generation"
        >
          @vercel/og
        </Link>
        and  */}
      </>
    ),
  },
];

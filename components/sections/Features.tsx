import { poppins } from "@/lib/fonts";
import clsx from "clsx";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";
import { DEPLOY_URL } from "@/lib/constants";
import Image from "next/image";

const FeatureSection = () => {
  return (
    <div className="w-full">
      {/* TODO: Add a gradient to the text */}
      <h2
        className={clsx(
          "text-xl md:text-2xl lg:text-3xl font-semibold text-primary text-center py-3",
          poppins.className
        )}
      >
        Some Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {features.map((feature, i) => (
          <Card
            key={i}
            className="bg-transparent border border-muted w-full shadow-lg flex flex-col"
          >
            <CardHeader></CardHeader>
            <CardContent className="flex justify-center items-center grow gap-2">
              {feature.description}
            </CardContent>
            <CardFooter className="flex-col items-center">
              <h3
                className={clsx(
                  "text-lg text-center font-medium mb-3",
                  poppins.className
                )}
              >
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground text-center">
                {feature.footer}
              </p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;

export const features = [
  {
    title: "Single Click deployment",
    description: (
      <>
        <Link href={DEPLOY_URL} target="_blank" rel="noopener noreferrer">
          <Image
            width={120}
            height={30}
            unoptimized
            src="https://vercel.com/button"
            alt="Vercel deploy button"
          />
        </Link>
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
            src="/clerk.png"
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
          src="/react-hook.png"
          alt="Vercel deploy button"
          className="object-cover rounded-full"
        />
      </>
    ),
    footer: (
      <>
        Zero-Path offers a collection of hooks, utilities, and
        <Link
          className="px-1 underline underline-offset-2"
          target="_blank"
          rel="noopener noreferrer"
          href="https://vercel.com/docs/functions/edge-functions/og-image-generation"
        >
          @vercel/og
        </Link>
      </>
    ),
  },
];

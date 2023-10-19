import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";

import { Providers } from "@/components/providers";
import { atkinsonHyperlegible } from "@/lib/fonts";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Zero Path - Your Next.js project kickstarter",
  description:
    "Zero Path is the project starter kit to the ball rolling in matter of seconds",
  twitter: {
    card: "summary_large_image",
    title: "Zero Path - Your Next.js project kickstarter ",
    description:
      "Zero Path is the project starter kit for your NextJS project to the ball rolling in matter of seconds",
    creator: "@VighneshGupta9",
    images:
      "https://user-images.githubusercontent.com/52371759/276502182-b603bee4-89b1-4a03-88c5-d82d9b7080dd.png",
  },
  openGraph: {
    title: "Zero Path - Your Next.js project kickstarter ",
    description:
      "Zero Path is the project starter kit for your NextJS project to the ball rolling in matter of seconds",
    images:
      "https://user-images.githubusercontent.com/52371759/276502182-b603bee4-89b1-4a03-88c5-d82d9b7080dd.png",
    type: "website",
    url: SITE_URL,
  },
  metadataBase: new URL(SITE_URL),
  themeColor: [
    {
      color: "#020817",
      media: "dark",
    },
    {
      color: "#F7F2F2",
      media: "light",
    },
  ],
  authors: {
    name: "Vighnesh Gupta",
    url: new URL("https://vigneshgupta.vercel.app/"),
  },
  creator: "Vighnesh Gupta",
  colorScheme: "dark light",
  keywords: ["nextjs", "frontend", "starter", "vignesh", "react", "vercel" , "shadcn" , "clerk" , "prisma"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={atkinsonHyperlegible.className}
          suppressHydrationWarning
        >
          <Providers
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}

import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "@/components/providers";
import { atkinsonHyperlegible } from "@/lib/fonts";

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
    images: new URL("https://zeropath.vercel.app/"),
  },
  metadataBase: new URL("https://zeropath.vercel.app/"),
  themeColor: "#FFF",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={atkinsonHyperlegible.className} suppressHydrationWarning>
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

"use client";

import { useState } from "react";
import ThemeSwitch from "./ThemeSwitch";
import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import MobileNav from "./MobileNav";
import { SignInButton, UserButton, useAuth } from "@clerk/nextjs";
import { navLinks } from "@/lib/constants/mappingConstants";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { isSignedIn } = useAuth();

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("clicked");
  };

  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b border-muted backdrop-blur">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <a className="mr-6 flex font-bold items-center space-x-2" href="/">
            :0 Path
          </a>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.text.toLocaleLowerCase()}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href={link.href}
              >
                {link.text}
              </a>
            ))}
          </nav>
        </div>

        <div className="justify-end flex-1 flex gap-3 items-center">
          <ThemeSwitch />
          {isSignedIn ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <SignInButton mode="modal">
              <Button className="text-white">Sign In</Button>
            </SignInButton>
          )}
        </div>
        <Sheet>
          <SheetTrigger asChild className="-order-1">
            <Button
              className="md:hidden mr-3"
              variant="outline"
              size="icon"
              aria-label="Open Menu"
              onClick={handleMenuClick}
            >
              <MenuIcon className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <MobileNav />
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;

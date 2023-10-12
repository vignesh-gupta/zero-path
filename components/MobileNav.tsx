import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  {
    text: 'Home',
    href: '/'
  }, 
  {
    text: 'Docs',
    href: '/docs'
  },
  {
    text: 'Components',
    href: '/docs/components'
  },
  {
    text: 'Themes',
    href: '/themes'
  },
  {
    text: 'Examples',
    href: '/examples'
  }

]

const MobileNav = () => {
  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle>:0 Path</SheetTitle>
      </SheetHeader>
      <div className="flex flex-col gap-4 py-4">
        {navLinks.map((link) => (
          <a href={link.href} className="" key={link.text.toLocaleLowerCase()}>{link.text}</a>
        ))}
      </div>
     
    </SheetContent>
  );
};

export default MobileNav;

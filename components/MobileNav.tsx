import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { navLinks } from "@/lib/constants/mappingConstants";

const MobileNav = () => {
  return (
    <SheetContent side="left">
      <SheetHeader>
        <SheetTitle>:0 Path</SheetTitle>
      </SheetHeader>
      <div className="flex flex-col gap-4 py-4">
        {navLinks.map((link) => (
          <a href={link.href} className="" key={link.text.toLocaleLowerCase()}>
            {link.text}
          </a>
        ))}
      </div>
    </SheetContent>
  );
};

export default MobileNav;

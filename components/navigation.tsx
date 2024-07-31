"use client";

import { usePathname, useRouter } from "next/navigation";
import { useMedia } from "react-use";
import { NavButton } from "@/components/nav-button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const routes = [
  {
    href: "/",
    label: "Ínicio",
  },
  {
    href: "/transactions",
    label: "Transações",
  },
  {
    href: "/accounts",
    label: "Contas",
  },
  {
    href: "/categories",
    label: "Categorias",
  },
  {
    href: "/settings",
    label: "Configurações",
  },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const isMobile = useMedia("(max-width: 1024px)", false);

  const onClick = (href: string) => {
    router.push(href);
    setIsOpen(false);
  };

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <Button
            variant="outline"
            size="sm"
            className="font-normal bg-white/10 hover:bg-white/20 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transition"
          >
            <Menu className="size-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="px-2">
          <nav className="flex flex-col gap-y-2 pt-6">
            {routes.map((route) => (
              <Button
                variant={pathname === route.href ? "secondary" : "ghost"}
                key={route.href}
                onClick={() => onClick(route.href)}
                className="w-full justify-start"
              >
                {route.label}
              </Button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <nav className="hidden lg:flex items-center gap-x-2 overflow-x-auto">
      {routes.map((route) => (
        <NavButton
          href={route.href}
          label={route.label}
          key={route.href}
          isActive={pathname === route.href}
        />
      ))}
    </nav>
  );
};

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { Menu, X, Facebook, Linkedin } from 'lucide-react';
import { Button } from '@/shared/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/shared/components/ui/dropdown-menu';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/shared/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/shared/components/ui/sheet';

type NavItem = {
  key: string;
  label: string;
  href?: string;
  external?: boolean;
  children?: NavItem[];
};

const navItems: NavItem[] = [
  {
    key: "courses",
    label: "nav.courses",
    children: [
      {
        key: "foundation200h",
        label: "nav.foundation200h",
        href: "/khoa-dao-tao-hlv-yoga-quoc-te-200h",
      },
      {
        key: "soundHealing",
        label: "KHÓA ĐÀO TẠO NHÀ TRỊ LIỆU CHUÔNG XOAY",
        href: "/sound-healing-ttc-by-maisie",
      },
      {
        key: "yoga300h",
        label: "KHÓA ĐÀO TẠO HLV YOGA 300H CHỮA LÀNH TOÀN DIỆN",
        href: "/khoa-dao-tao-hlv-yoga-chua-lanh-toan-dien-quoc-te-300h",
      },
    ],
  },
  {
    key: "onlineCourses",
    label: "nav.onlineCourses",
    children: [
      {
        key: "foundation200hOnline",
        label: "KHÓA ĐÀO TẠO HLV YOGA NỀN TẢNG 200H – ONLINE TỰ CHỦ",
        href: "/khoa-dao-tao-hlv-yoga-nen-tang-200h-online",
      },
    ],
  },
  {
    key: "store",
    label: "CỬA HÀNG SẢN PHẨM CHỮA LÀNH",
    href: "/cua-hang-san-pham-chua-lanh",
  },
  {
    key: "partnership",
    label: "LIÊN KẾT ĐÀO TẠO",
    href: "/lien-ket-dao-tao-hlv-yoga",
  },
  {
    key: "lms",
    label: "YATA YOGA LMS",
    href: "https://lms.yata-yoga.com/",
    external: true,
  },
  { key: "contact", label: "LIÊN HỆ", href: "/lien-he-yata-yoga" },
];

export function Header() {
  const { t, i18n } = useTranslation();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <a className="sr-only" href="#maincontent">
        Skip to main content
      </a>

      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="https://yata-yoga.com/wp-content/uploads/2023/09/cropped-logo-official-mix.png"
            alt="YATA YOGA"
            width={106}
            height={52}
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {navItems.map((item) =>
              item.children ? (
                <NavigationMenuItem key={item.key}>
                  <NavigationMenuTrigger>{t(item.label)}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-1 p-2 w-80">
                      {item.children.map((child) => (
                        <NavigationMenuLink
                          key={child.key}
                          href={child.href || "#"}
                          className="block px-3 py-2 hover:bg-gray-100 rounded"
                        >
                          {t(child.label)}
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={item.key}>
                  <NavigationMenuLink asChild>
                    <Link 
                      href={item.href || "#"}
                      target={item.external ? "_blank" : undefined}
                      className="px-3 py-2 hover:text-gray-900"
                    >
                      {t(item.label)}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )
            )}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Social */}
          <div className="hidden md:flex gap-2">
            <Link
              href="https://www.facebook.com/yatayogadaotaohlv"
              target="_blank"
            >
              <Facebook className="h-5 w-5 text-gray-600 hover:text-blue-600" />
            </Link>
            <Link href="https://www.instagram.com/" target="_blank">
              <Linkedin className="h-5 w-5 text-gray-600 hover:text-blue-600" />
            </Link>
          </div>

          {/* Language Switch */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                {i18n?.language?.toUpperCase() || 'EN'}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => changeLanguage('en')}>
                English
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => changeLanguage('vi')}>
                Tiếng Việt
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile Menu */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                {isMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-4">
              <nav className="flex flex-col gap-3">
                {navItems.map((item) =>
                  item.children ? (
                    <div key={item.key}>
                      <p className="font-medium">{t(item.label)}</p>
                      {item.children.map((child) => (
                        <Link
                          key={child.key}
                          href={child.href || "#"}
                          onClick={() => setIsMenuOpen(false)}
                          className="block pl-4 py-1 text-sm"
                        >
                          {t(child.label)}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      key={item.key}
                      href={item.href || "#"}
                      target={item.external ? "_blank" : undefined}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t(item.label)}
                    </Link>
                  )
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

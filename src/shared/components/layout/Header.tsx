"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Facebook, Linkedin, Menu, X } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import HeaderDropdownCoursesOffline from "./Header_dropdown_courses_off";
import HeaderDropdownCoursesOnline from "./Header_dropdown_courses_onl";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/shared/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/shared/components/ui/sheet";
import { useTranslation } from "react-i18next";

export function Header() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        {/* Logo */}
        <Link href="/">
          <Image
            src="https://yata-yoga.com/wp-content/uploads/2023/09/cropped-logo-official-mix.png"
            alt="Logo"
            width={240}
            height={120}
            className="object-contain"
          />
          <span className="text-[#fb5b21]">{t("YATA YOGA")}</span>
        </Link>

        {/* Desktop menu */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="font-quicksand">
            <HeaderDropdownCoursesOffline />
            <HeaderDropdownCoursesOnline />
            <Link
              href="/cua-hang-san-pham-chua-lanh"
              className="relative px-3 py-2 text-sm font-normal text-black transition-colors duration-300 hover:text-[#fb5b21] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#fb5b21] after:transition-all after:duration-300 hover:after:w-full"
            >
              {t("CỬA HÀNG SẢN PHẨM CHỮA LÀNH")}
            </Link>
            <Link
              href="/lien-ket-dao-tao-hlv-yoga"
              className="relative px-3 py-2 text-sm font-normal text-black transition-colors duration-300 hover:text-[#fb5b21] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#fb5b21] after:transition-all after:duration-300 hover:after:w-full"
            >
              {t("LIÊN KẾT ĐÀO TẠO")}
            </Link>
            <Link
              href="https://lms.yata-yoga.com/"
              target="_blank"
              className="relative px-3 py-2 text-sm font-normal text-black transition-colors duration-300 hover:text-[#fb5b21] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#fb5b21] after:transition-all after:duration-300 hover:after:w-full"
            >
              {t("YATA YOGA LMS")}
            </Link>
            <Link
              href="https://lms.yata-yoga.com/"
              target="_blank"
              className="relative px-3 py-2 text-sm font-normal text-black transition-colors duration-300 hover:text-[#fb5b21] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#fb5b21] after:transition-all after:duration-300 hover:after:w-full"
            >
              {t("LIÊN HỆ")}
            </Link>
            <Link
              href="https://www.facebook.com/yatayogadaotaohlv"
              target="_blank"
              className="px-3 py-2"
            >
              <Facebook className="h-5 w-5 text-gray-600 hover:text-[#fb5b21] transition-colors duration-300" />
            </Link>
            <Link href="https://www.instagram.com/" target="_blank" className="px-3 py-2">
              <Linkedin className="h-5 w-5 text-gray-600 hover:text-[#fb5b21] transition-colors duration-300" />
            </Link>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                {open ? <X /> : <Menu />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-4 font-quicksand">
              <nav className="flex flex-col gap-4">
                <HeaderDropdownCoursesOffline />
                <HeaderDropdownCoursesOnline />
                <Link
                  href="/cua-hang-san-pham-chua-lanh"
                  className="px-3 py-2 text-sm font-normal text-black hover:text-[#fb5b21] transition-colors duration-300"
                  onClick={() => setOpen(false)}
                >
                  {t("CỬA HÀNG SẢN PHẨM CHỮA LÀNH")}
                </Link>
                <Link
                  href="/lien-ket-dao-tao-hlv-yoga"
                  className="px-3 py-2 text-sm font-normal text-black hover:text-[#fb5b21] transition-colors duration-300"
                  onClick={() => setOpen(false)}
                >
                  {t("LIÊN KẾT ĐÀO TẠO")}
                </Link>
                <Link
                  href="https://lms.yata-yoga.com/"
                  target="_blank"
                  className="px-3 py-2 text-sm font-normal text-black hover:text-[#fb5b21] transition-colors duration-300"
                  onClick={() => setOpen(false)}
                >
                  {t("YATA YOGA LMS")}
                </Link>
                <Link
                  href="https://lms.yata-yoga.com/"
                  target="_blank"
                  className="px-3 py-2 text-sm font-normal text-black hover:text-[#fb5b21] transition-colors duration-300"
                  onClick={() => setOpen(false)}
                >
                  {t("LIÊN HỆ")}
                </Link>
                <div className="flex gap-4 px-3 py-2">
                  <Link href="https://www.facebook.com/yatayogadaotaohlv" target="_blank">
                    <Facebook className="h-5 w-5 text-gray-600 hover:text-[#fb5b21] transition-colors duration-300" />
                  </Link>
                  <Link href="https://www.instagram.com/" target="_blank">
                    <Linkedin className="h-5 w-5 text-gray-600 hover:text-[#fb5b21] transition-colors duration-300" />
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  );
}

"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import {
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/shared/components/ui/navigation-menu";
export default function HeaderDropdownCoursesOnline() {
  const { t } = useTranslation();

  const onlineCourses = [
    {
      key: "foundation200hOnline",
      label: "KHÓA ĐÀO TẠO HLV YOGA NỀN TẢNG 200H – ONLINE TỰ CHỦ",
      href: "/khoa-dao-tao-hlv-yoga-nen-tang-200h-online",
    },
  ];

  return (
    <NavigationMenuItem className="px-3 py-2 hover:text-[#fb5b21]">
      <NavigationMenuTrigger className="text-sm font-normal text-black hover:text-[#fb5b21]">{t("CÁC KHÓA ĐÀO TẠO ONLINE")}</NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="grid gap-1 p-2 w-80">
          {onlineCourses.map((course) => (
            <NavigationMenuLink asChild key={course.key}>
              <Link
                href={course.href}
                className="block px-3 py-2 text-sm font-normal text-black hover:bg-gray-100 hover:text-[#fb5b21] rounded"
              >
                {t(course.label)}
              </Link>
            </NavigationMenuLink>
          ))}
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

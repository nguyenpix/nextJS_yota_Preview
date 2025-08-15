'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import {
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from '@/shared/components/ui/navigation-menu';
export default function HeaderDropdownCoursesOffline() {
   
    const { t } = useTranslation();

    const offlineCourses = [
      {
        key: 'foundation200h',
        label: 'KHÓA ĐÀO TẠO HLV YOGA QUỐC TẾ 200H',
        href: '/khoa-dao-tao-hlv-yoga-quoc-te-200h',
      },
      {
        key: 'soundHealing',
        label: 'KHÓA ĐÀO TẠO NHÀ TRỊ LIỆU CHUÔNG XOAY',
        href: '/sound-healing-ttc-by-maisie',
      },
      {
        key: 'yoga300h',
        label: 'KHÓA ĐÀO TẠO HLV YOGA 300H CHỮA LÀNH TOÀN DIỆN',
        href: '/khoa-dao-tao-hlv-yoga-chua-lanh-toan-dien-quoc-te-300h',
      },
    ];
  
    return (
      <NavigationMenuItem className="px-3 py-2 hover:text-[#fb5b21]">
        <NavigationMenuTrigger className="text-sm font-normal text-black hover:text-[#fb5b21]">{t('CÁC KHÓA ĐÀO TẠO')}</NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className="grid gap-1 p-2 w-80">
            {offlineCourses.map((course) => (
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

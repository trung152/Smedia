"use client";
import { useLocale, useTranslations } from "next-intl";
import { locales } from "@/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import Image from "next/image";
import { startTransition, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { listLanguages } from "@/lib/utils";
import { toast } from "sonner";

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [selectedLanguage, setSelectedLanguage] = useState<any>(locale);
  //   const t = useTranslations('LocaleSwitcher');
  function removeLocalePrefix(pathname: string) {
    const localePrefix = pathname.slice(1, 3); // Lấy 3 ký tự đầu tiên sau dấu '/'
    if (locales.includes(localePrefix as any)) {
      return pathname.slice(4); // Xóa 3 ký tự đầu tiên và dấu '/' nếu chúng phù hợp
    }
    return pathname; // Trả về pathname ban đầu nếu không có sự phù hợp
  }

  function onSelectChange(value: any) {
    toast.success("Change language success");
    console.log("🚀 ~ onSelectChange ~ value:", value);
  }

  function onLanguageChange(language: any) {
    setSelectedLanguage(language);
    const newPath = `/${language}/${removeLocalePrefix(pathname)}`;
    startTransition(() => {
      router.replace(newPath, { scroll: false });
    });
    if (window.flutter_inappwebview) {
      window.flutter_inappwebview
        .callHandler("onSelectChange", language)
        .then(function (response: any) {
          console.log("Phản hồi từ Flutter: " + response);
        });
    }
  }

  return (
    <div>
      <Select value={selectedLanguage} onValueChange={onLanguageChange}>
        <SelectTrigger className="outline-none">
          <SelectValue placeholder="" />
        </SelectTrigger>
        <SelectContent className="z-[9999]">
          {listLanguages.map((item: any) => (
            <SelectItem key={item.code} value={item.code}>
              <div className="flex gap-2">
                <div className="flex items-between gap-1">
                  <Image
                    src={item?.img}
                    alt="logo"
                    width={20}
                    height={20}
                    className="rounded-full"
                  />
                  <div>{item.name}</div>
                </div>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

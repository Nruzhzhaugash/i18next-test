import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

export default function Example() {
  const t = useTranslations("Example");
  
  return (
    <div className="">
      <h1 className="text-center text-4xl font-semibold mb-3">{t("title")}</h1>
      <div className="flex justify-center items-center gap-5">
        <Link href='/about'>About</Link>
        <Link href='/blog'>Blog</Link>
        <Link locale="en" href='/'>Just</Link>
      </div>
    </div>
  )
}
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

export default function Example() {
  const t = useTranslations("Example");
  
  return (
    <div className="">
      <h1 className="text-center text-4xl font-semibold mb-3">{t("title")}</h1>
      <div className="flex justify-center items-center gap-5">
        <Link href='/about' className="hover:underline">About</Link>
        <Link href='/blog' className="hover:underline">Blog</Link>
        <Link locale="en" href='/' className="hover:underline">Just</Link>
      </div>
    </div>
  )
}
import HomePages from "@/pages/Home/Home";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Index");

  return (
    <main>
      <HomePages />
    </main>
  );
}

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import LangSwitcher from '@/features/lang-switcher/ui/lang-switcher'

export default function Navbar() {
  const t = useTranslations("Navigation")

  return (
    <nav className="flex items-center justify-between">
      <Link className='font-semibold' href={'/'}>{t('home')}</Link>
      <LangSwitcher />
    </nav>
  )
}

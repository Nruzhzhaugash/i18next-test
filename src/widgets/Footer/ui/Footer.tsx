import { useTranslations } from 'next-intl'
import React from 'react'

export default function Footer() {
  const t = useTranslations("Footer")
  
  return (
    <h1 className='text-center font-semibold pb-10'>{t("copyright")}</h1>
  )
}

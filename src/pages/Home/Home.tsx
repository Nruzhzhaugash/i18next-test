import { useTranslations } from 'next-intl'
import React from 'react'

export default function HomePages() {
  const t = useTranslations("IndexPage");
  const hello = useTranslations("Index")

  return (
    <div>
      {hello('title')}
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  )
}


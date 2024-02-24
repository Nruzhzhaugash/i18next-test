import Example from '@/widgets/Example/ui/Example';
import { useTranslations } from 'next-intl'
import React from 'react'

export default function HomePages() {
  const t = useTranslations("IndexPage");

  return (
    <div>
      <h1 className='text-4xl mb-4 font-semibold'>{t('title')}</h1>
      <p className='mb-20'>{t('description')}</p>
      <Example />
    </div>
  )
}


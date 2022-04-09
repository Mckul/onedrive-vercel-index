import type { ParsedUrlQuery } from 'querystring'

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'next-i18next'

const HomeCrumb = () => {
  const { t } = useTranslation()

  return (
    <Link href="/">
      <a className="flex items-center">
        <FontAwesomeIcon className="h-3 w-3" icon={['far', 'flag']} />
        <span className="ml-2 font-medium">{t('Home')}</span>
      </a>
    </Link>
  )
}


export default HomeCrumb

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



  return (
    <div className="text-sm text-gray-600 transition-all duration-75 hover:opacity-80 dark:text-gray-300">
      <HomeCrumb />
    </div>
  )
}

export default Breadcrumb

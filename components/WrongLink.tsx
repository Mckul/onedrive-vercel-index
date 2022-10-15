import Image from 'next/image'
import { Trans } from 'next-i18next'

const WrongLink: React.FC<{ errorMsg: string }> = ({ errorMsg }) => {
  return (
    <div className="my-12">
      <div className="mx-auto w-1/3">
        <Image src="/images/fabulous-wapmire-weekdays.png" alt="500" width={912} height={912} priority />
      </div>
      <div className="mx-auto mt-6 max-w-xl text-gray-500">
        <div className="mb-8 text-xl font-bold">
          <Trans>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            You are seeing this page because you have accessed the wrong link, <span className="underline decoration-red-500 decoration-wavy">go back to the site and get the correct link by clicking the Download Button</span>.
          </Trans>
        </div>
      </div>
    </div>
  )
}

export default WrongLink

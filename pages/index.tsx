import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import siteConfig from '../config/site.config'
import Navbar from '../components/Navbar'

import Footer from '../components/Footer'
import Breadcrumb from '../components/Breadcrumb'
import SwitchLayout from '../components/SwitchLayout'

export default function Home() {
  return (
    <div style="background: url('https://www.google.com/url?sa=i&url=https%3A%2F%2Ffree4kwallpapers.com%2Fanime%2Fanime-wallpaper--NRx6&psig=AOvVaw1C0hBOeKABI179zFJFXw9x&ust=1649624347716000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCLjynfPuh_cCFQAAAAAdAAAAABAE')" className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-gray-900">
      <Head>
        <title>{siteConfig.title}</title>
      </Head>

      <main className="flex w-full flex-1 flex-col bg-gray-50 dark:bg-gray-800">
        <Navbar />
        <div className="mx-auto w-full max-w-5xl p-4">
          <nav className="mb-4 flex items-center justify-between pl-1">
            <Breadcrumb />
            <SwitchLayout />
          </nav>
        
        </div>
      </main>

      <Footer />
    </div>
  )
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

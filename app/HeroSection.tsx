import Image from 'next/image'
import WGGLogoBlue from './wgg-logo-blue.svg'
import { ArrowRightIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function HeroSection() {
  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="https://www.wgg-neumarkt.de" className="p-1.5 text-blue-600">
              <span className="sr-only">WGG Genossenschaft</span>
              <Image src={WGGLogoBlue} alt="WGG Logo" height={32} />
            </Link>
          </div>
          {/* <div className="flex gap-x-5 lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div> */}
        </nav>
      </header>

      <div className="relative isolate px-6 py-7 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Verkündung unserer neuen Finanzierungsrunde.{' '}
              <Link href="https://www.wgg-neumarkt.de/schuelergenossenschaft/wggenossenschaft" className="font-semibold text-blue-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Mehr erfahren <span aria-hidden="true"><ArrowRightIcon className="h-4 w-4 inline-block" /></span>
              </Link>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Von Schülern. Für Schüler. Gemeinsam.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Eine Schülergenossenschaft ist ein Schülerfirmen-Modell, bei dem Schülerinnen und Schüler im geschützten Raum der Schule weitestgehend eigenständig ein eigenes Unternehmen gründen und betreiben.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="https://www.wgg-neumarkt.de/schuelergenossenschaft/wggenossenschaft"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Anmelden
              </Link>
              <Link href="https://www.wgg-neumarkt.de/schuelergenossenschaft/wggenossenschaft" className="text-sm font-semibold leading-6 text-gray-900">
                Mehr erfahren <span aria-hidden="true"><ArrowRightIcon className="h-4 w-4 inline-block" /></span>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
  )
}

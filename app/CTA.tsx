import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function CTA() {
  return (
    <div className="py-20 mx-auto px-3 max-w-screen-lg">
      <div className="px-6 py-10 bg-slate-50 rounded-lg">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Mach mit. Gestalte. <br />Werde Genosse!</h2>
        <div className="mt-10 flex items-center gap-x-6">
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
    
  )
}
import Image from 'next/image'
import WGGLogo from './wgg-logo-slate.svg'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="text-slate-400 text-center py-24 px-9 flex flex-col items-center gap-8">
      
      <Link href="https://www.wgg-neumarkt.de" className="hover:brightness-90">
        <Image src={WGGLogo} alt="WGG Logo" height={40} />
      </Link>

      <span className="">&copy; 2023 <Link href="https://www.alexanderhorner.de" className="hover:text-slate-500 underline underline-offset-4">Alexander Horner</Link>. Alle Rechte vorbehalten.</span>
          
    </footer>
  )
}

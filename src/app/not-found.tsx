import Link from 'next/link'
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="flex min-h-[90vh] flex-col items-center justify-center p-10 lg:px-20 lg:py-2 space-y-0">
      <Image src="/error/Error-404.jpg" alt="Error 404" width={1800} height={1500} className="w-full rounded-lg" />
      <p className="text-lg md:text-2xl mb-2">Página no encontrada</p>
      <Link href="/">
        <p className="text-white hover:underline mt-0 mb-0">Volver al inicio</p>
      </Link>
    </div>
  )
}

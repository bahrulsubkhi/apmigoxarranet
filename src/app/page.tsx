import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex justify-center">
        <Link href="/activation" className="border-2 hover:bg-gray-200 rounded-lg p-2">
          Aktifkan Pembayaran
        </Link>
      </div>
    </main>
  )
}

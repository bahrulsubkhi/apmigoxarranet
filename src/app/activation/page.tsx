import type { Metadata } from 'next'
import ReInput from '@/components/reuse/reInput'

export const metadata: Metadata = {
  title: 'Aktivasi Pembayaran',
}

export default function activation () {
  return (
    <form className="flex flex-col items-center gap-4 p-8">
      <ReInput
        label="No Handphone"
      />
      <ReInput
        label="Email"
        type="email"
      />
      <ReInput
        label="Password"
        type="password"
      />
    </form>
  )
}
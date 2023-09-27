import SimpsonsCharacters from '@/components/SimpsonsCharacters'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1>Components list example</h1>
      <SimpsonsCharacters/>
    </main>
  )
}

import Image from 'next/image'
import { Inter } from 'next/font/google'

import Hello from '@/components/Hello'
import NewConcept from '@/components/NewConcept'
import ComponentWrapper from '@/components/ComponentWrapper'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <Hello />
        <ComponentWrapper textColor={"red"}>
          <NewConcept concept={"props and using them in components"} />
          <NewConcept concept={"state in react components"} />
          <NewConcept concept={"ul libraries and other random ones"} />
        </ComponentWrapper>
    </main>
  )
}

import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import ErrorBoundary from '@/components/common/ErrorBoundary'

const martyrData = {
  name: "Shykh Ashhabul Yamin",
  age: 24,
  killedBy: "Oppressive Regime",
  deathAge: 24,
  deathLocation: "Savar, Dhaka, Bangladesh",
  image: "/SY_profile.jpg",
  bio: "Shykh Ashhabul Yamin was a courageous activist who dedicated his life to fighting for human rights and democracy...",
  achievements: [
    "Led peaceful protests for democratic reforms",
    "Established a non-profit organization for education",
    "Authored influential books on civil liberties",
  ],
  memories: [
    { title: "Remembering Yamin's Courage", url: "#" },
    { title: "A Day in the Life of Shykh Ashhabul Yamin", url: "#" },
    { title: "Yamin's Last Speech", url: "#" },
  ],
  articles: [
    { title: "The Legacy of Shykh Ashhabul Yamin", url: "#" },
    { title: "How Shykh Ashhabul Yamin Changed Our Nation", url: "#" },
    { title: "Shykh Ashhabul Yamin: A Symbol of Resistance", url: "#" },
  ],
};

// Lazy load the MartyrPage component
const MartyrPage = dynamic(() => import('@/components/sources/MartyrContentPage'), {
  ssr: false,
})

export default function Home() {
  return (
    <ErrorBoundary>
      <main className="min-h-screen bg-gray-900 text-white">
        <Suspense fallback={<div>Loading...</div>}>
          <MartyrPage martyrData={martyrData}/>
        </Suspense>
      </main>
    </ErrorBoundary>
  )
}

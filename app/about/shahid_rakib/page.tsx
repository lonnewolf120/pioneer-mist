import MartyrContentPage from "@/components/sources/MartyrContentPage"

const martyrData = {
  name: "MD. Rakibul Hussein",
  age: 35,
  killedBy: "Oppressive Regime",
  deathAge: 35,
  deathLocation: "Freedom Square, Capital City",
  image: "/SR_profile.png",
  bio: "MD. Rakibul Hussein was a courageous activist who dedicated his life to fighting for human rights and democracy...",
  achievements: [
    "Led peaceful protests for democratic reforms",
    "Established a non-profit organization for education",
    "Authored influential books on civil liberties",
  ],
  memories: [
    { title: "Remembering John's Courage", url: "#" },
    { title: "A Day in the Life of MD. Rakibul Hussein", url: "#" },
    { title: "John's Last Speech", url: "#" },
  ],
  articles: [
    { title: "The Legacy of MD. Rakibul Hussein", url: "#" },
    { title: "How MD. Rakibul Hussein Changed Our Nation", url: "#" },
    { title: "MD. Rakibul Hussein: A Symbol of Resistance", url: "#" },
  ],
};

export default function Home() {
  return (
    
    <main className="min-h-screen bg-gray-900 text-white">
      <MartyrContentPage martyrData={martyrData}/>
    </main>

  );
}

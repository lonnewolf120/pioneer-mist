import MartyrPage from "@/components/sources/MartyrPage";

export default function MartyrProfile() {
  const header = {
    title: "Captain Shaheed Aman",
    imageUrl: "/cover.jpg",
    imageAlt: "Captain Shaheed Aman",
  };

  const bioSections = [
    { title: "Early Life", content: "Captain Aman was born in a small village..." },
    { title: "Military Career", content: "He joined the military academy at the age of 18..." },
    { title: "Final Mission", content: "On his final mission, Captain Aman displayed exemplary courage..." },
    { title: "Legacy", content: "Captain Aman is remembered as a national hero..." },
  ];

  const achievements = [
    "Awarded the Gallantry Medal for bravery",
    "Led multiple successful missions in high-risk areas",
    "Trained over 100 soldiers in advanced combat tactics",
  ];

  const articles = [
    { title: "Captain Aman: A Heroic Journey", link: "#" },
    { title: "Remembering Captain Aman", link: "#" },
  ];

  const memories = [
    { title: "Childhood Days", description: "A story from his childhood where he helped a friend in need..." },
    { title: "Training Camp", description: "A memory from the rigorous training camp where he excelled..." },
  ];

  const blogPosts = [
    { title: "The Legacy of Captain Aman", description: "A blog post by a fellow soldier who served with him..." },
    { title: "Remembering the Bravery", description: "A tribute to Captain Aman's bravery and leadership..." },
  ];

  return (
    <MartyrPage
      header={header}
      bioSections={bioSections}
      achievements={achievements}
      articles={articles}
      memories={memories}
      blogPosts={blogPosts}
    />
  );
}

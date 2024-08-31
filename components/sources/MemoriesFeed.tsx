"use client"
import { useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"

const memories = [
  {
    id: 1,
    title: "A True Hero's Sacrifice",
    content: "I remember the day Shahid Yamin stood up against injustice. His courage inspired us all.",
    author: "Ahmed Khan",
    date: "2023-05-10",
    martyr: "shahid_yamin",
    type: "personal_account"
  },
  {
    id: 2,
    title: "Rakib's Last Speech",
    content: "Shahid Rakib's words still echo in my mind. He knew the risks but chose to fight for what's right.",
    author: "Fatima Ali",
    date: "2023-06-15",
    martyr: "shahid_rakib",
    type: "event_recollection"
  },
  {
    id: 3,
    title: "The Day That Changed Everything",
    content: "Witnessing Shahid Yamin's sacrifice firsthand changed my perspective on civic duty and courage.",
    author: "Mohammad Rahman",
    date: "2023-07-20",
    martyr: "shahid_yamin",
    type: "personal_account"
  },
  {
    id: 4,
    title: "Rakib's Impact on Our Community",
    content: "Shahid Rakib's actions sparked a movement that continues to inspire our youth today.",
    author: "Ayesha Begum",
    date: "2023-08-05",
    martyr: "shahid_rakib",
    type: "community_impact"
  },
  {
    id: 5,
    title: "Yamin's Legacy in Education",
    content: "The scholarship fund established in Shahid Yamin's name has helped countless students pursue their dreams.",
    author: "Dr. Kamal Hossain",
    date: "2023-09-01",
    martyr: "shahid_yamin",
    type: "legacy"
  }
]

const martyrs = ["shahid_yamin", "shahid_rakib"]
const memoryTypes = ["personal_account", "event_recollection", "community_impact", "legacy"]

export default function MemoriesPage() {
  const [selectedMartyr, setSelectedMartyr] = useState("")
  const [selectedType, setSelectedType] = useState("")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredMemories = memories.filter(memory => 
    (selectedMartyr === "" || memory.martyr === selectedMartyr) &&
    (selectedType === "" || memory.type === selectedType) &&
    (memory.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
     memory.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
     memory.author.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <div className="min-h-screen bg-black bg-opacity-90 bg-[radial-gradient(#330000_1px,transparent_1px)] [background-size:16px_16px] text-gray-200 pb-12">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-red-600 mb-8">Memories of Our Martyrs</h1>
        
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <Select onValueChange={setSelectedMartyr}>
              <SelectTrigger className="bg-gray-800 border-red-800">
                <SelectValue placeholder="Select a Martyr" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Martyrs</SelectItem>
                {martyrs.map(martyr => (
                  <SelectItem key={martyr} value={martyr}>
                    {martyr.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select onValueChange={setSelectedType}>
              <SelectTrigger className="bg-gray-800 border-red-800">
                <SelectValue placeholder="Select Memory Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                {memoryTypes.map(type => (
                  <SelectItem key={type} value={type}>
                    {type.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Input
            type="text"
            placeholder="Search memories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-gray-800 text-white border-red-800"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filteredMemories.map(memory => (
            <Card key={memory.id} className="bg-gray-900 border-red-800">
              <CardHeader>
                <CardTitle className="text-red-500">{memory.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">{memory.content}</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-red-900 text-gray-200">
                    {memory.martyr.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </Badge>
                  <Badge variant="secondary" className="bg-red-900 text-gray-200">
                    {memory.type.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </Badge>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <div>
                  <span className="text-sm text-gray-500">{memory.author}</span>
                  <span className="text-sm text-gray-500 ml-2">|</span>
                  <span className="text-sm text-gray-500 ml-2">{memory.date}</span>
                </div>
                <Button className="bg-red-700 hover:bg-red-600">Read More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredMemories.length === 0 && (
          <p className="text-center text-gray-400 mt-8">No memories found matching your criteria.</p>
        )}
      </div>
    </div>
  )
}
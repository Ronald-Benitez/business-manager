import React from 'react'
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Button>Click me</Button>
      <ModeToggle />
    </div>
  )
}

export default Home
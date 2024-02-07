import Image from 'next/image'
import {Button} from "@/components/ui/button";

export default function Home() {
  return (
    <main className="h-screen">
        <div className="flex flex-row items-center justify-center">

            <h1 className="text-7xl font-extrabold mt-1.5 text-black">GIRLATHON 2.0</h1>
            <Button variant={"outline"}  type="button">ADMIN LOGIN</Button>
        </div>
    </main>
  )
}

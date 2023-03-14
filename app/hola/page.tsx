"use client"
import { useSession } from "next-auth/react"
import { signOut } from "next-auth/react"

export default function Home() {
  const { data } = useSession()
  console.log(data?.user)
    return (
      <div>
        dfgfg
        <button onClick={()=> signOut()}>DES LOGEAR</button>
      </div>
    )
  }
  
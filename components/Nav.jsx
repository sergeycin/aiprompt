"use client"

import Link from "next/link"
import Image from "next/image"
import { useState,useEffect } from "react"
import {signIn, signOut, useSession, getProviders} from 'next-auth/react'

const Nav = () => {
    const {data: session} = useSession(); 

    const [providers, setProviders] = useState(null)
    useEffect(() =>{
        const setUpProviders = async () =>{
            const response = await  getProviders();

            setProviders(response)


        }

        setUpProviders()
    },[])

  return (
    <nav className="block m-auto md:flex justify-between w-full mt-10  mr-10 p-3 pl-10 sm:block">
        <div className="central-content">
        <Link href="/" className="flex gap-2 flex-center items-center">
            <Image src="/assets/images/logo2.svg" alt="Promptopia logo" width="40" height="40" className="object-contain"></Image>
            <p className="logo_text text-center pb-0">AI-Prompts</p>
        </Link> 
        </div>
      

        <div className="sm:flex central-content">
                {session?.user ? (<div className="flex gap-3">
                    <Link className="bg-blue-500 text-white font-bold py-2 px-4 rounded" href="/create-prompt">Create Post</Link>
                    <button type="button border-black border-2 py-2 px-4 rounded" onClick={signOut}>Sign Out</button>
                    <Link href="/profile">
                      <Image src={session?.user.image} width={37} height={37} className="rounded-full" alt="rounded"></Image>
                    </Link>
                </div>) : <>
                  {providers && Object.values(providers).map((provider) =>( 
                    <button type="button" key={provider.name} onClick={() => signIn(provider.id)} className="black_btn"> Sign In</button>
                  ))}
                
                </>}
        </div>
    </nav>
  )
}

export default Nav
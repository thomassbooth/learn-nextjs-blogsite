'use client'
import React from 'react'
import Link from 'next/link'
import {FaYoutube, FaTwitter, FaGithub, FaLaptop} from 'react-icons/fa'
import { signIn, signOut, useSession } from 'next-auth/react'

export default function Navbar() {
  return (
    <nav className = 'bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10'>
        <div className = 'prose prose-xl mx-auto flex justify-between flex-col sm:flex-row'>
            <h1 className = 'text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0'>
                <Link href = '/' className = 'text-white/90 no-underline hover:text-white'>
                    Tom Booth
                </Link>
            </h1>
            <div className = 'flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl'>
                <Link className = 'text-white/90 hover:text-white' href = 'https://youtube.com/'>
                    <FaYoutube/>
                </Link>
                <Link className = 'text-white/90 hover:text-white' href = 'https://youtube.com/'>
                    <FaLaptop/>
                </Link>
                <Link className = 'text-white/90 hover:text-white' href = 'https://github.com/thomassbooth'>
                    <FaGithub/>
                </Link>
                <Link className = 'text-white/90 hover:text-white' href = 'https://twitter.com/thomassboothh'>
                    <FaTwitter/>
                </Link>
                <h1 className = 'text-xl font-bold text-white grid place-content-center mb-2 md:mb-0'>
                    <Link href = '/api/auth/signin' className = 'text-white/90 no-underline hover:text-white'>
                        <p onClick = {e => {
                            e.preventDefault()
                            signIn('github')
                        }}>sign in</p>
                    </Link>
                </h1>
                <h1 className = 'text-xl font-bold text-white grid place-content-center mb-2 md:mb-0'>
                    <Link href = '/api/auth/signout' className = 'text-white/90 no-underline hover:text-white'>
                        <p onClick = {e => {
                            e.preventDefault()
                            signOut()
                        }}>sign out</p>
                    </Link>
                </h1>
            </div>
        </div>
    </nav>
  )
}

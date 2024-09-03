"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

const Menu = () => {

    const [open,SetOpen]=useState(false)

    return (
      <div className=''>
        
        <Image src ="/menu.png" alt="" width={28} height={28} className="cursor-pointer" onClick={()=>SetOpen((prev)=>!prev)} />
        {open && (
            <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-90px)] flex flex-col items-center justify-center gap-8 text-xl z-3">
                <Link href="/">Homepage</Link>
                <Link href="/list">Shop</Link>
                <Link href="/sale">Sale</Link>
                <Link href="/about">About</Link>
                <Link href="/">Logout</Link>
                <Link href="/">Cart</Link>
            </div>

        )}
     </div>
    )
  }
  
  export default Menu
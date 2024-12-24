"use client"

import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div style={{display:"flex", backgroundColor:"black", padding:"20px", gap:"30px",position:"sticky",top:"0"}}>
      <Link href={'/about'}>
      <div style={{fontSize:"20px",fontWeight:"bold",color:"white"}}>
        About
      </div>
      </Link>
      <Link href={'/blog'}>
      <div style={{fontSize:"20px",fontWeight:"bold",color:"white"}}>
        Blog
      </div>
      </Link>
      <Link href={'/addProducts/add-mobile'}>
      <div style={{fontSize:"20px",fontWeight:"bold",color:"white"}}>
        Products
      </div>
      </Link>
    
    </div>
  )
}

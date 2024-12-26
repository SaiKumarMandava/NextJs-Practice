"use client"
import Link from 'next/link'

import React, { useEffect, useState } from 'react'

export default function AllMobiles() {
    const [mobileData,setMobileData]= useState([])

      
    useEffect(()=>{

        const mobileFetch = async ()=>{
            try{
              const response = await fetch(`${process.env.NEXT_PUBLIC_URI}products/mobiles`)
              const data = await response.json()
              setMobileData(data.mobileData)
            }catch(e){
               console.log(e)
            }
        }
        mobileFetch()

    },[])

    console.log(mobileData)

    
  return (
    <div>
      <h1>Mobiles Data</h1>
   
      <table style={{borderCollapse:"collapse",fontFamily:"sans-serif"}}> 
        <thead style={{backgroundColor:"#04AA6D",color:"white",fontWeight:"bold",fontSize:"19px",fontFamily:"sans-serif"}}>
          <tr >
            <th style={{border:"1px solid #ddd",padding:"10px",textAlign:"center",width:"100px"}}>ID</th>
            <th style={{border:"1px solid #ddd",padding:"10px",textAlign:"center",width:"200px"}}>Name</th>
            <th style={{border:"1px solid #ddd",padding:"10px",textAlign:"center",width:"200px"}}>Model</th>
            <th style={{border:"1px solid #ddd",padding:"10px",textAlign:"center",width:"200px"}}>Price</th>

            <th style={{border:"1px solid #ddd",padding:"10px",textAlign:"center",width:"100px"}}>Action</th>
          </tr>
        </thead>
        <tbody>
          {mobileData?.map((item,index) => (
            <tr key={index}>
              <td style={{border:"1px solid #ddd",padding:"10px",textAlign:"center"}}>{index+1}</td>

              <td style={{border:"1px solid #ddd",padding:"10px",textAlign:"center"}}>{item.title}</td>
              <td style={{border:"1px solid #ddd",padding:"10px",textAlign:"center"}}>{item.model}</td>
              <td style={{border:"1px solid #ddd",padding:"10px",textAlign:"center"}}>{item.price}</td>
              <td style={{border:"1px solid #ddd",padding:"10px",textAlign:"center",display:"flex",gap:"10px"

                ,justifyContent:'center'
              }}>
                
            <Link href={`/`}>
            <button
              style={{
                backgroundColor:"#0096FF",
                color:"white",
                padding:"10px",
                borderRadius:"5px",
                cursor:"pointer",
                width:"100px",
                border:"1px solid #ddd",
                fontSize:"16px",
                fontWeight:"bold",
                fontFamily:"sans-serif"
              }}
              >Edit</button>
              </Link>
              <button
              style={{
                backgroundColor:"#FF3131",
                color:"white",
                padding:"10px",
                borderRadius:"5px",
                cursor:"pointer",
                width:"100px",
                border:"1px solid #ddd",
                fontSize:"16px",
                fontWeight:"bold",
                fontFamily:"sans-serif"
              }}
            //   onClick={()=>handleClick(item.id)}
              >Delete</button>
              
              
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

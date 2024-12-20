
"use client"

import { useEffect, useState } from "react"
import axios from "axios"

export default function Blog() {
  const [data,setData]= useState([])
  const [loading,setLoading]= useState(true)
  const [error,setError]= useState(null)
  const url = 'https://jsonplaceholder.typicode.com/posts'
  useEffect(()=>{
    const getData = async()=>{
      try{
        const response = await axios.get(url)
      console.log(response)
        setData(response.data)
        setLoading(false)
      }catch(err) {
        console.log(err.message)
        setError(err.message)
        setLoading(false)
      }
      
    }
    getData()
  },[url])

  if(loading) return <h1 className="flex justify-center items-center h-96">Loading...</h1>
  if(error) return <h1 className="flex justify-center items-center h-96">{error}</h1>
    return (
      <div className="py-3 px-5 ">
      
        {
          data?.map((post, index) => (
           <div key={index}>
            <div>
              <h1 className="pb-1 py-2">{post.title}</h1>
              <p className="pb-2">{post.body}</p>

            </div>
            <hr/>
           </div>
          ))
        }
      </div>
    )
  }
  
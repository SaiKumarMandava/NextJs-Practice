'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function page({params}) {

   
    const [product,setProduct]=useState({
        title: '',
        price: '',
        model: ''
  
    })

    console.log(params)
    
    const id = React.use(params)
    console.log(id)
const router = useRouter()

    const handleChange = (e) => {
        const {name,value}= e.target
        setProduct({...product, [name]: value })
    }

    const handleSubmit = async(e) => {
        e.preventDefault()

        const response = await fetch(`${process?.env?.NEXT_PUBLIC_URI}products/mobiles/${id.productID}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        
      
        // setProduct({title: '', price: '', model: ''})
        router.back()
    }

  

    useEffect(()=>{
        const mobile = async()=>{
        const response =await  fetch(`${process?.env?.NEXT_PUBLIC_URI}products/mobiles/${id.productID}`)
         const data = await response.json()
         console.log(data)
         setProduct({
            title: data.mobileData.title,
            price: data.mobileData.price,
            model: data.mobileData.model
        })
        }
        mobile()

       
    },[])


  return (
    <div className=' px-4 py-4'>
       <div>
      <h1 className={`text-gray-600 text-[24px] font-bold`}>
        Edit Mobile
        </h1>
      <form onSubmit={handleSubmit} className=' flex gap-10 py-2'>
        <div>
       <div className='flex flex-col gap-1 w-[250px]'>
       <label
       className=' font-semibold text-gray-600'
       >Product Name :</label>
        <input 
        type="text" 
        name="title" 
        value={product.title}
        onChange={handleChange}
        required 
        className=' border focus:outline-none border-red-50 p-2 rounded-md bg-gray-100'
        placeholder='Enter product name'
        />
       </div>
       <div className='flex flex-col gap-1 py-2 w-[250px]'>

        <label 
       className=' font-semibold text-gray-600'
        
        
        >Product Price :</label>
        <input 
        type="text" 
        name="price" 
        value={product.price} 
        onChange={handleChange}
        className=' border border-red-50 focus:outline-none p-2 rounded-md bg-gray-100'
placeholder='Enter price'
        
        required 
        />
        </div>
        </div>
        <div>
        <div className='flex flex-col gap-1 w-[250px]'>

        <label
        
       className=' font-semibold text-gray-600'
        
        >Product Model :</label>
        <input 
        type="text" 
        name="model" 
        value={product.model} 
        onChange={handleChange}
        className=' border border-red-50 focus:outline-none p-2 rounded-md bg-gray-100'
        placeholder='Enter model name'


        required 
        />
        </div>
        <button type="submit"
        className='mt-9 bg-black font-semibold text-white px-[70px] py-2 rounded-md'
        >Update Product</button>
        </div>
      </form>
    </div>
    </div>
  )
}

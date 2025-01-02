'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
// import AllMobiles from '../allProducts/allmobile/page'
const AddProduct = () => {
    const [product,setProduct]=useState({
        title: '',
        price: '',
        model: ''
  
    })
    const [mobileData,setMobileData]= useState([])
    const [trigger, setTrigger] = useState(false);

    const handleChange = (e) => {
        const {name,value}= e.target
        setProduct({...product, [name]: value })
    }       

    const handleSubmit = async(e) => {
        e.preventDefault()

        const response = await fetch(`${process?.env?.NEXT_PUBLIC_URI}products/mobiles`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        setTrigger(!trigger);
      
        setProduct({title: '', price: '', model: ''})
    }




      
    useEffect(()=>{

        const mobileFetch = async ()=>{
            try{
              const response = await fetch(`/api/products/mobiles`)
              const data = await response.json()
              setMobileData(data.mobileData)
            }catch(e){
               console.log(e)
            }
        }
        mobileFetch()

    },[trigger])

    console.log(mobileData)

const handleDelete = async(productID)=>{
  try{
    const response = await fetch(`${process?.env?.NEXT_PUBLIC_URI}products/mobiles/${productID}`,{
        method: 'DELETE',
    })
    setTrigger(!trigger)
  }catch(e){
    console.log(e)
  }
}

  return (
    <div className='px-5 py-5'>
 <div className=''>
     <div>
      <h1 className={`text-gray-600 text-[24px] font-bold`}>
        Add Mobile
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
        className=' border border-red-50 p-2 focus:outline-none rounded-md bg-gray-100'
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
        className=' border border-red-50 p-2 focus:outline-none rounded-md bg-gray-100'
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
        className=' border border-red-50 p-2 focus:outline-none rounded-md bg-gray-100'
        placeholder='Enter model name'


        required 
        />
        </div>
        <button type="submit"
        className='mt-9 bg-black font-semibold text-white px-20 py-2 rounded-md'
        >Add Product</button>
        </div>
      </form>
    </div>
    <div>
    <div className='py-4'>
      <h1 className={`text-gray-600 text-xl font-bold`}>Mobiles Data</h1>
   
     <div className='py-2'>
     <table  style={{borderCollapse:"collapse",fontFamily:"sans-serif"}}> 
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
                
            <Link href={`/addProducts/allProducts/allmobile/${item?._id}`}>
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
              onClick={()=>handleDelete(item._id)}
              >Delete</button>
              
              
              </td>
            </tr>
          ))}
        </tbody>
      </table>
     </div>
    </div>
    </div>
 </div>
 </div>
  )
}

export default AddProduct

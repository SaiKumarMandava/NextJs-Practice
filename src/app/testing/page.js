"use client"
import Link from "next/link"
import { useState } from "react"



export default function Testpage() {
    const [testArray, setTestArray] = useState([
        { id: 1, name: "John Doe", age: 30 },
        { id: 2, name: "Jane Smith", age: 25 },
        { id: 3, name: "Bob Johnson", age: 35 },
        { id: 4, name: "Alice Wilson", age: 28 },
      ]);
    const handleAdd =()=>{
        const newUser = {
            id: testArray.length + 1,
            name: `New User ${testArray.length + 1}`,
            age:  3* testArray.length,
          };
        
        setTestArray((prev)=>[...prev,newUser])
    }

const handleClick =(id)=>{
    
    // const index = testArray.findIndex((item) => item.id === id)
    // if(index !== -1){
    //     testArray.splice(index, 1)
    //     console.log("Deleted Id",id)
    // }else {
    //     console.log(`Item with ID: ${id} not found`);
    //   }
    
    //   console.log("Updated array:", testArray);
    //   setTestArray(testArray)
    const updatedArray = testArray.filter((item) => item.id !== id);
    console.log(updatedArray)
    setTestArray(updatedArray); // Update the state
    console.log(`Deleted item with ID: ${id}`);
}
  return (
    <div>
      <h1>Test Page</h1>
      <button
              style={{
                backgroundColor:"#343434",
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
              onClick={handleAdd}
              >Add</button>
              
      <table style={{borderCollapse:"collapse",fontFamily:"sans-serif"}}> 
        <thead style={{backgroundColor:"#04AA6D",color:"white",fontWeight:"bold",fontSize:"19px",fontFamily:"sans-serif"}}>
          <tr>
            <th style={{border:"1px solid #ddd",padding:"10px",textAlign:"center",width:"100px"}}>ID</th>
            <th style={{border:"1px solid #ddd",padding:"10px",textAlign:"center",width:"150px"}}>Name</th>
            <th style={{border:"1px solid #ddd",padding:"10px",textAlign:"center",width:"100px"}}>Age</th>
            <th style={{border:"1px solid #ddd",padding:"10px",textAlign:"center",width:"100px"}}>Action</th>
          </tr>
        </thead>       
        <tbody>
          {testArray?.map((item,index) => (
            <tr key={index}>
              <td style={{border:"1px solid #ddd",padding:"10px",textAlign:"center"}}>{item.id}</td>
              <td style={{border:"1px solid #ddd",padding:"10px",textAlign:"center"}}>{item.name}</td>
              <td style={{border:"1px solid #ddd",padding:"10px",textAlign:"center"}}>{item.age}</td>
              <td style={{border:"1px solid #ddd",padding:"10px",textAlign:"center",display:"flex",gap:"10px"

                ,justifyContent:'center'
              }}>
                
            <Link href={`/testing/${item.id}`}>
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
              >View</button>
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
              onClick={()=>handleClick(item.id)}
              >Delete</button>
              
              
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

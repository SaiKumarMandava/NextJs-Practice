"use client";

import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

export default function SampleDetails({ params }) {
  const [sampled, setSampled] = useState(null);
  

  useEffect(() => {
    const fetchParams= async()=> {
      const resolvedParams = await params;
      
      setSampled(resolvedParams?.sampled || "Unknown");
    }
    fetchParams();
  }, [params]);

console.log(sampled?.length)

// if (parseInt(sampled)>=1001){
//   notFound()
// }


if(sampled?.length===2){
  return (
    <div>
      <h1>Sample {sampled[0]} Details & Sample {sampled[1]} Details</h1>
     
    </div>
  )
}else if(sampled?.length===1){
  return (
    <div>
      <h1>Sample {sampled} Details</h1>
    </div>
  );
}

  return (
    <div>
      <h1>Sample Details</h1>
    </div>
  );
}

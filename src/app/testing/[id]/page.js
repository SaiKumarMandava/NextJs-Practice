'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'


export default function TestIDpage({params}) {
  console.log(params)
  const [sampled, setSampled] = useState(null);
  const router = useRouter();
  const { id } = React.use(params);
  console.log(id)

  useEffect(() => {
  
    if (id) {
      
    
      const testArray = [
        { id: 1, name: 'John Doe', age: 30 },
        { id: 2, name: 'Jane Smith', age: 25 },
        { id: 3, name: 'Bob Johnson', age: 35 },
        { id: 4, name: 'Alice Wilson', age: 28 },
      ];

      const item = testArray.find((entry) => entry.id === parseInt(id));
      setSampled(item || { error: 'Item not found' });
    }
  }, [id]);

  console.log(sampled)

  if (!sampled) {
    return <p>Loading...</p>;
  }

  if (sampled.error) {
    return <p>{sampled.error}</p>;
  }

  return (
    <div>
      <h1>Details for ID: {id}</h1>
      <p><strong>Name:</strong> {sampled?.name}</p>
      <p><strong>Age:</strong> {sampled?.age}</p>
      <button onClick={() => router.push('/testing')}>Back</button>
    </div>
  );
}

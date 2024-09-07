'use client';
import { useParams } from 'next/navigation';

const Page = () => {
  const params = useParams(); 
  const { id } = params;  

  if (!id) {
    return <div>Loading...</div>; 
  }

  // fetch data for page with id
  

  return (
    <div>
      <h1>Page {id}</h1>
      {/* Add your page content here */}
    </div>
  );
};

export default Page;

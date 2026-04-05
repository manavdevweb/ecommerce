import React from 'react'
import ProductGrid from '../assets/components/ProductGrid';
import Footer from '../assets/components/Footer';
//   <>

const categories = [
  "All", 
  "CPU", 
  "Graphic Cards", 
  "Phone"

];


function Home() {
  return (
    <div>
      <div className='bg'></div>
      <div className='container mx-auto my-10 px-4'>
        <div className='flex gap-4'>
            {categories.map((cat) => (
              <button
                className='bg-gray-300 py-2 px-4 rounded-md text-black active:scale-105 hover:bg-zinc-400 transition-all ease-in cursor-pointer'
                key={cat}
              >
                {cat}
              </button>
            ))}
        </div>

        <ProductGrid />
     
      </div>
      <Footer />
    </div>
  )
}

export default Home
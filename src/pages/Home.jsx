import React from 'react'
import ProductGrid from '../assets/components/ProductGrid';
import Footer from '../assets/components/Footer';
import { useDispatch } from 'react-redux';
import { setSelectedCategory } from '../features/products/ProductSlice';
//   <>

const categories = [
  "All", 
  "CPU", 
  "Graphic Cards", 
  "Phone"

];


function Home() {

  const dispatch = useDispatch(); 
  return (
    <div>
<div className="relative w-full h-[70vh] overflow-hidden">

  {/* VIDEO */}
  <video
    autoPlay
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/videos/bannerecommerce.mp4" type="video/mp4" />
  </video>

  {/* OVERLAY CONTENT */}
  <div className="relative z-10 flex items-center justify-end h-full pr-10 md:pr-40">

    <div className="flex flex-col gap-6 text-white items-start">

      <h1 className="text-3xl md:text-5xl font-bold text-black">
        PixelPop Store
      </h1>

      <div className="flex flex-wrap gap-4">

        <a
          href="/"
          className="bg-zinc-300 text-black px-5 py-3 rounded-lg font-semibold hover:bg-zinc-400 transition"
        >
          Portfolio
        </a>

        <a
          href="/"
          className="bg-violet-800 text-white px-5 py-3 rounded-lg font-semibold hover:bg-violet-900 transition"
        >
          GitHub
        </a>

        <a
          href="/"
          className="bg-pink-700 text-white px-5 py-3 rounded-lg font-semibold hover:bg-pink-800 transition"
        >
          Shop
        </a>

      </div>

    </div>

  </div>

</div>
      <div className='container mx-auto my-10 px-4'>
        <div className='flex gap-4'>
            {categories.map((cat) => (
              <button
                className='bg-gray-300 py-2 px-4 rounded-md text-black active:scale-105 hover:bg-zinc-400 transition-all ease-in cursor-pointer'
                key={cat} onClick={()=> dispatch(setSelectedCategory(cat))}
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
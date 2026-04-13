import React from 'react'
import ProductGrid from '../assets/components/ProductGrid';
import Footer from '../assets/components/Footer';
import { useDispatch } from 'react-redux';
import { setSelectedCategory } from '../features/products/ProductSlice';

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

      {/* HERO VIDEO */}
<div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">

  {/* DESKTOP VIDEO */}
  <video
    autoPlay
    muted
    playsInline
    className="hidden md:block absolute inset-0 w-full h-full object-cover object-center"
  >
    <source src="/videos/bannerecommerce.mp4" type="video/mp4" />
  </video>

  {/* MOBILE VIDEO */}
  <video
    autoPlay
    muted
    playsInline
    className="block md:hidden absolute inset-0 w-full h-full object-cover object-center"
  >
    <source src="/videos/mobilebanner.mp4" type="video/mp4" />
  </video>

  {/* OVERLAY */}
  <div className="relative z-10 flex items-center justify-end h-full pr-10 md:pr-40">

    <div className="flex flex-col gap-6 items-start text-left pt-60 pr-4 md:pr-0 md:pt-0">

      <h1 className="text-3xl md:text-5xl font-bold text-black">
        PixelPop Store
      </h1>

      <div className="flex gap-3 md:gap-4 overflow-x-auto md:overflow-visible whitespace-nowrap">

        <a className="bg-zinc-300 text-black px-5 py-3 rounded-lg font-semibold hover:bg-zinc-400 transition">
          Portfolio
        </a>

        <a className="bg-violet-800 text-white px-5 py-3 rounded-lg font-semibold hover:bg-violet-900 transition">
          GitHub
        </a>

        <a className="bg-pink-700 text-white px-5 py-3 rounded-lg font-semibold hover:bg-pink-800 transition">
          Shop
        </a>

      </div>

    </div>

  </div>

</div>

      {/* CATEGORIES + PRODUCTS */}
      <div className='container mx-auto my-10 px-4'>

        <div className='flex flex-wrap gap-4'>

          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => dispatch(setSelectedCategory(cat))}
              className='bg-gray-300 py-2 px-4 rounded-md text-black active:scale-105 hover:bg-zinc-400 transition-all ease-in cursor-pointer'
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
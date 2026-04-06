import { ShoppingCart, User } from 'lucide-react'; 
import React, { useState } from 'react'; 
import { Link } from 'react-router-dom'; 
import logo from "../imgs/logo/logo.svg"; 
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../../features/products/ProductSlice';
//   <>  +  −   `   ´ &
// ``

function Navbar() {

  const [isOpen, setIsOpen] = useState(false); 
  const dispatch = useDispatch(); 
  const searchTerm = useSelector((state)=>state.product.searchTerm); 

  // cart 
  const cartItems = useSelector((state)=> state.cart.items); 
  const itemCount = cartItems.reduce((total, item)=> total + item.quantity, 0); 

  const handleUser = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className='bg-white shadow-md'>
      <>
      <div className='py-4 shadow-md bg-black'>
        <ul className='container mx-auto flex flex-wrap justify-between md:flex-row px-4 md:px-2 items-center relative'>

          <div className='flex gap-4'>
            <li className='text-white'><Link to="/">Home</Link></li>
            <li className='text-white'><Link to="/">About</Link></li>
            <li className='text-white'><Link to="/">FAQs</Link></li>
            <li className='text-white'><Link to="/">Contact</Link></li>
          </div>

          <div className={`${isOpen ? "flex flex-col absolute right-0 top-12 z-10 bg-zinc-50 p-4 gap-4 rounded" : "hidden"}`}>
            <li><Link to="/">Sign</Link></li>
            <li><Link to="/">My account</Link></li>
          </div>

          <User
            size={40}
            onClick={handleUser}
            className='bg-gray-200 p-2 text-black rounded cursor-pointer'
          />

        </ul>
      </div>
      <div className='bg-red-950'>
      <nav className='flex justify-between items-center container mx-auto md:py-6 py-8 px-2'>
        <div className='flex items-center'>
          <Link to='/' className=' py-2 px-4 rounded'>
          <img src={logo} alt="logo" className='h-15 object-contain rounded-full' /></Link>
        </div>
        <form className='w-1/2 sm:block hidden'>
          <input type="text"
           placeholder='Search Product' 
           className='bg-zinc-100 rounded-2xl border border-zinc-200 focus:outline-none py-3 px-3 w-full'
           value={searchTerm} 
           onChange={(e)=> dispatch(setSearchTerm(e.target.value))}/>

        </form>
        <div className='relative'>
                  <Link to={"/cart"}>
        <ShoppingCart className='cursor-pointer bg-gray-100 px-3 rounded-full' size={54}/>
        {itemCount > 0 && <span className='absolute -top-2 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 items-center justify-center flex'>{itemCount}</span> }
        </Link>
        </div>
      </nav>
      </div>
      </>
    </header>
  )
}

export default Navbar
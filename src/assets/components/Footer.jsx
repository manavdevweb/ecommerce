import React from 'react'
import logo from "../imgs/logo/logo.svg"
import facebook from "../imgs/social/facebook.svg"
import insta from "../imgs/social/instagram.svg"
import youtube from "../imgs/social/yt.svg"
import twitter from "../imgs/social/twitter.svg"
import { Link } from 'react-router-dom'
//   <>

function Footer() {
  return (
    <footer className='bg-black shadow-md'>
        <div className='container mx-auto px-4'>
            <div className='min-h-16'> 
                <div className='flex justify-between items-center flex-col md:flex-row py-10'>
                    <h2 className='text-4xl font-bold text-white'>Subscribe our Newsletter</h2>
                    <form className='md:w-1/3 w-full mt-8 md:mt-0 relative'>
                        <input type="text" placeholder='Enter your Email' className='py-4 px-4 rounded-2xl shadow-md w-full bg-amber-50'/>
                        <button className='bg-black py-3 px-4 rounded-full absolute right-3 top-1 text-white font-bold'>Submit</button>
                    </form>
                </div>

            </div>

        </div>

        <div className='bg-red-950 text-white py-8'>
            <div className='container mx-auto px-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>
                    <div> 
                        <img src={logo} alt="" className='my-4' width={100}/>
                        <p>pooppy poppy pop</p>
                        <div className='flex items-center gap-8 mt-5'>   
                            <img src={facebook} alt="logo facebook" width={40}  className='bg-white text-black rounded-md p-2 cursor-pointer ' /> 
                            <img src={insta} alt="logo insta" width={40} className='bg-white text-black rounded-md p-2 cursor-pointer ' /> 
                            <img src={twitter} alt="logo twitter" width={40} className='bg-white text-black rounded-md p-2 cursor-pointer ' />   
                            <img src={youtube} alt="logo yt" width={40} className='bg-white text-black rounded-md p-2 cursor-pointer ' />                       
                        </div>
                    </div>
                    <div> <h2 className='text-2xl font-semibold my-4'>Pages</h2>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/">About</Link>
                        </li>
                        <li>
                            <Link to="/">FAQs</Link>
                        </li>
                        <li>
                            <Link to="/">Contact</Link>
                        </li>
                    </ul>
                    </div>
                    <div>
                        <h2 className='text-2xl font-semibold my-4'>Category</h2>
                    <ul>
                        <li>
                            <Link to="/">Monitors</Link>
                        </li>
                        <li>
                            <Link to="/">GPUs</Link>
                        </li>
                        <li>
                            <Link to="/">CPUs</Link>
                        </li>
                        <li>
                            <Link to="/">Phone</Link>
                        </li>
                    </ul>
                    </div>
                    <div>
                        <h2 className='text-2xl font-semibold my-4'>Category</h2>
                        <p>70 Washington Square, New York, United States</p>
                        <p>07 66 42 59 90</p>
                        <p>07 66 42 59 99</p>
                    </div>
                </div>

            </div>

        </div>

        <div className='container mx-auto text-center py-4 text-white'>
            <p>Copyright; 2026 PixelPop </p>
        </div>

    </footer>
  )
}

export default Footer
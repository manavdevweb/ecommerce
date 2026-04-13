import { ShoppingCart } from 'lucide-react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { addToCart } from '../features/cart/cartSlice';
//   <>
// Page qui s'affiche quand tu clique sur un article

function ProductDetails() {

  const {id} = useParams(); 
  const dispatch = useDispatch(); 

  const product = useSelector((state)=>{
    return state.product.items.find((p)=> p.id === parseInt(id)); 
  }); 

if(!product){
  return (
    <div className='container mx-auto px-4 py-8 '>
      <div className='text-center'>
        <h2 className='text-2xl font-bold mb-4'>Product not found</h2>
        <Link to="/" className='text-blue-600 hover:text-blue-800'>Return to Home</Link>
      </div>
    </div>
  );
}

  return (
    <div className='container mx-auto px-4 py-8'>
      <div>

        <Link to="/" className='mb-8 inline-block'>
          Back to Products
        </Link>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>

          <div className='shadow-md rounded w-full'>
            <img src={product.image} alt={product.title} />
          </div>

          <div>
            <h1 className='text-3xl font-bold mb-4'>
              {product.title}
            </h1>

            <p className='text-gray-600 mb-6 whitespace-pre-line'>
              {product.description}
            </p>

            <div className='mb-6'>
              <span className='text-3xl font-bold'>
                {product.price}€
              </span>
            </div>

            <div className='mb-6'>
              <h3 className='mb-2 font-semibold'>
                Category
              </h3>

              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm'>
                {product.category}
              </span>
          </div>
          <button className='w-full  md:w-auto bg-zinc-200 px-8 py-3 rounded-md flex items-center justify-center gap-2 hover:bg-zinc-300'
          onClick={()=> dispatch(addToCart(product))}>
            <ShoppingCart/>
            Add to Cart
            </button>

            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
import React from 'react'
import { products } from '@/utils/constant'
import Link from 'next/link'

function Products() {
  return (
    <div>
      {products.map((product) =>(
        <Link href={`/products/${product.id}`} key={product.id} >
         <div className='border m-2'>
          <h1 className='font-bold text-3xl'>{product.name}</h1>
          <h1>{product.price}</h1>
        </div>
        </Link>
       
      ))}
    </div>
  )
}

export default Products

// 'use client'   // client side rendering  

// import { useParams } from 'next/navigation'
// import React from 'react'

// const itemsPage = () => {
//     const params = useParams()   
//     const {id} = useParams()     // another way to access
//   return (
//     <div>
//       this is items number {params.id}
//       this is items number {id}         // another way to access
//     </div>
//   )
// }

// export default itemsPage


////////////////////////////////////////////////////////////////////////


//  server side rendering

type paramsType = {params : {id : string}}

const itemsPage = async ({params}:paramsType) => {
  return (
    <div>
      this is items number {params.id}
    </div>
  )
}
export default itemsPage



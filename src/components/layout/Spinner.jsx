import React from 'react'
import Spinner2 from './assets/spinner2.gif'

function Spinner() {
  return (
    <div className='w-100 mt-20'>
      <img className='text-center mx-auto' src={Spinner2} width={180} alt="Loading..." />
    </div>
  )
}

export default Spinner
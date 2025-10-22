import React from 'react'
import Loader from '../src/components/loader.jsx'
import Button from '../src/components/button.jsx'

export default function HomePage() {
  return (
    <div className='flex flex-row w-full h-full'>
      <div className='w-1/2 h-full flex flex-col items-baseline justify-baseline pt-40 pl-[80px] gap-8'>
        <h1 className='text-6xl'>ICM <span className='text-accent font-bold'>Computers</span></h1>
        <h3 className='text-4xl animate-pulse gap-3'>Your One-Stop Shop for <br/>Quality Tech!</h3>
        <Loader></Loader>
      </div>
      <div className='w-1/2 h-full flex flex-col items-basline pt-40 pl-[220px] gap-3.5'>
        <h3 className='text-5xl'>Explore some <br></br> <span className='text-accent font-bold'>Awesome</span> <br></br> Computer Equipments!...</h3>
        <br></br>
        <Button></Button>
      </div>
    </div>
  )
}

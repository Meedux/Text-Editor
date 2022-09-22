import React from 'react'
import Main from '../components/Main'
import Link from 'next/link'


const index = () => {
  return (
    <>
        <Main />

        <div className='mt-10'>
          <Link href={'/mini'}>
            <a className='p-2 bg-black text-input-gray'>Minimal Text Editor</a>
          </Link>
        </div>
    </>
  )
}

export default index
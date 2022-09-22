import React from 'react'
import Minified from '../components/Minified'
import Link from 'next/link'

const mini = () => {
  return (
    <>
        <Minified />
        <div className='mt-10'>
          <Link href={'/'}>
            <a className='p-2 bg-black text-input-gray'>Full Text Editor</a>
          </Link>
        </div>
    </>
  )
}

export default mini
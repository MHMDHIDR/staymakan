import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from './navbar/Logo'
import ThemeToggler from './ThemeToggler'

export default function Footer() {
  return (
    <footer className='m-4'>
      <div className='mx-auto w-full max-w-screen-xl p-4 md:py-8'>
        <div className='sm:flex sm:items-center sm:justify-between'>
          <Logo />
          <ThemeToggler />
        </div>
        <hr className='my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8' />
        <span className='block text-sm text-gray-500 dark:text-gray-400 sm:text-center'>
          © {new Date().getFullYear()}&nbsp;
          <Link href='https://StayMakan.com/' className='hover:underline'>
            StayMakan
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}

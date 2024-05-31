import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href='/' className='flex gap-x-3 items-center'>
      <Image
        className='hidden cursor-pointer md:block w-10 h-auto'
        src='/images/logo-sm.png'
        width={0}
        height={0}
        sizes='100vw'
        alt='Logo'
        priority={true}
      />
      <span className='font-semibold dark:text-gray-200'>StayMakan</span>
    </Link>
  )
}

export default Logo

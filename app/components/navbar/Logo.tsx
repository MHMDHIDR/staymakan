import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href='/' className='flex items-center gap-x-3'>
      <Image
        className='hidden h-auto w-10 cursor-pointer md:block'
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

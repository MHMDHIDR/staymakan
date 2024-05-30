import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href='/'>
      <Image
        className='hidden cursor-pointer md:block w-32 h-auto'
        src='/images/logo.png'
        width={0}
        height={0}
        sizes='100vw'
        alt='Logo'
        priority={true}
      />
    </Link>
  )
}

export default Logo

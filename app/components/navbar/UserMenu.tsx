'use client'

import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useCallback, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import useLoginModal from '@/app/hooks/useLoginModal'
import useRegisterModal from '@/app/hooks/useRegisterModal'
import useRentModal from '@/app/hooks/useRentModal'
import { SafeUser } from '@/app/types'
import Avatar from '../Avatar'
import MenuItem from './MenuItem'

interface UserMenuProps {
  currentUser?: SafeUser | null
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const router = useRouter()

  const loginModal = useLoginModal()
  const registerModal = useRegisterModal()
  const rentModal = useRentModal()

  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = useCallback(() => {
    setIsOpen(value => !value)
  }, [])

  const onRent = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen()
    }

    rentModal.onOpen()
  }, [loginModal, rentModal, currentUser])

  return (
    <div className='relative'>
      <div className='flex flex-row items-center gap-3'>
        <div
          onClick={onRent}
          className='hidden cursor-pointer rounded-full px-4 py-3 text-sm font-semibold transition hover:bg-neutral-100 dark:hover:bg-neutral-800 md:block'
        >
          StayMakan your home
        </div>
        <div
          onClick={toggleOpen}
          className='border-[1px]border-neutral-200 flex cursor-pointer flex-row items-center gap-3 rounded-full p-4 transition hover:shadow-md md:px-2 md:py-1'
        >
          <AiOutlineMenu />
          <div className='hidden md:block'>
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='absolute right-0 top-12 overflow-hidden rounded-xl bg-white text-sm shadow-md dark:bg-black md:w-3/4'>
          <div className='flex cursor-pointer flex-col'>
            {currentUser ? (
              <>
                <MenuItem label='My trips' onClick={() => router.push('/trips')} />
                <MenuItem label='My favorites' onClick={() => router.push('/favorites')} />
                <MenuItem label='My reservations' onClick={() => router.push('/reservations')} />
                <MenuItem label='My properties' onClick={() => router.push('/properties')} />
                <MenuItem label='StayMakan your home' onClick={rentModal.onOpen} />
                <hr />
                <MenuItem label='Logout' onClick={() => signOut()} />
              </>
            ) : (
              <>
                <MenuItem label='Login' onClick={loginModal.onOpen} />
                <MenuItem label='Sign up' onClick={registerModal.onOpen} />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default UserMenu

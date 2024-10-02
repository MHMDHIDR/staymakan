'use client'

import { useCallback, useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import Button from '../Button'

interface ModalProps {
  isOpen?: boolean
  onClose: () => void
  onSubmit: () => void
  title?: string
  body?: React.ReactElement
  footer?: React.ReactElement
  actionLabel: string
  disabled?: boolean
  secondaryAction?: () => void
  secondaryActionLabel?: string
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  actionLabel,
  footer,
  disabled,
  secondaryAction,
  secondaryActionLabel
}) => {
  const [showModal, setShowModal] = useState(isOpen)

  useEffect(() => {
    setShowModal(isOpen)
  }, [isOpen])

  const handleClose = useCallback(() => {
    if (disabled) {
      return
    }

    setShowModal(false)
    setTimeout(() => {
      onClose()
    }, 300)
  }, [onClose, disabled])

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return
    }

    onSubmit()
  }, [onSubmit, disabled])

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return
    }

    secondaryAction()
  }, [secondaryAction, disabled])

  if (!isOpen) {
    return null
  }

  // if modal is open then disable scrolling
  if (showModal) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }

  return (
    <div className='fixed inset-0 z-[10000] flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none bg-neutral-800/70'>
      <div className='relative h-full mx-auto w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 lg:h-auto md:h-auto'>
        <div
          className={` translate duration-300 h-full ${
            showModal ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
          <div className='relative flex flex-col w-full bg-white dark:bg-neutral-900 border-0 rounded-lg shadow-lg outline-none translate h-full lg:h-auto md:h-auto focus:outline-none'>
            <div className=' flex items-center p-6 rounded-t justify-center relative border-b-[1px]'>
              <button
                className='border-0  p-1 hover:opacity-70 transition absolute left-9'
                onClick={handleClose}
              >
                <IoMdClose size={18} />
              </button>
              <div className='text-lg font-semibold'>{title}</div>
            </div>
            {/*body*/}
            <div className='relative flex-auto p-6'>{body}</div>
            {/*footer*/}
            <div className='flex flex-col p-6 gap-2'>
              <div className='flex flex-row items-center gap-4 w-full'>
                {secondaryAction && secondaryActionLabel && (
                  <Button
                    disabled={disabled}
                    label={secondaryActionLabel}
                    onClick={handleSecondaryAction}
                    outline
                  />
                )}
                <Button disabled={disabled} label={actionLabel} onClick={handleSubmit} />
              </div>
              {footer}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal

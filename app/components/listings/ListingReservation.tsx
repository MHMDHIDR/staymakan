'use client'

import { Range } from 'react-date-range'

import Button from '../Button'
import Calendar from '../inputs/Calendar'

interface ListingReservationProps {
  price: number
  dateRange: Range
  totalPrice: number
  onChangeDate: (value: Range) => void
  onSubmit: () => void
  disabled?: boolean
  disabledDates: Date[]
}

const ListingReservation: React.FC<ListingReservationProps> = ({
  price,
  dateRange,
  totalPrice,
  onChangeDate,
  onSubmit,
  disabled,
  disabledDates
}) => {
  return (
    <div
      className='
      bg-white 
      dark:bg-neutral-800
        rounded-xl 
        border-[1px]
      border-neutral-200 
      dark:border-neutral-700
        overflow-hidden
      '
    >
      <div
        className='flex flex-row items-center p-4 
  gap-1'
      >
        <div className='text-2xl font-semibold'>$ {price}</div>
        <div className='font-light text-neutral-600'>night</div>
      </div>
      <hr />
      <Calendar
        value={dateRange}
        disabledDates={disabledDates}
        onChange={value => onChangeDate(value.selection)}
      />
      <hr />
      <div className='p-4'>
        <Button disabled={disabled} label='Reserve' onClick={onSubmit} />
      </div>
      <hr />
      <div
        className='flex flex-row items-center p-4 
  justify-between
 font-semibold
 text-lg
'
      >
        <div>Total</div>
        <div>$ {totalPrice}</div>
      </div>
    </div>
  )
}

export default ListingReservation

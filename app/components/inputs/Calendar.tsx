'use client'

import { DateRange, Range, RangeKeyDict } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

interface DatePickerProps {
  value: Range
  onChange: (value: RangeKeyDict) => void
  disabledDates?: Date[]
}

const DatePicker: React.FC<DatePickerProps> = ({ value, onChange, disabledDates }) => {
  return (
    <DateRange
      rangeColors={['#BA8C2B']}
      className='mx-auto max-w-sm rounded-md [display:block!important] dark:bg-neutral-950'
      ranges={[value]}
      classNames={{
        dayDisabled: 'dark:bg-neutral-950 opacity-50'
      }}
      date={new Date()}
      onChange={onChange}
      direction='horizontal'
      showDateDisplay={false}
      minDate={new Date()}
      disabledDates={disabledDates}
    />
  )
}

export default DatePicker

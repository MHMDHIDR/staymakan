'use client'

import { Monitor, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export default function ModeToggle() {
  const { setTheme, theme } = useTheme()
  // if system theme is enabled, we need to check if the user's system theme is dark or light, if it's dark then the color is '#ddd' else it's '#000'
  let IconColor =
    theme === 'dark' ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches && theme === 'system')
      ? '#ddd'
      : '#000'

  return (
    <div className='mx-auto flex max-w-fit items-center space-x-2 rounded-full border p-1 md:mx-0'>
      <button
        onClick={() => setTheme('light')}
        className={`${theme === 'light' ? 'bg-primary/90' : 'bg-transparent'} h-7 w-7 rounded-full p-1`}
      >
        <Sun strokeWidth={1} size={18} color={IconColor} />
      </button>
      <button
        onClick={() => setTheme('system')}
        className={`${theme === 'system' ? 'bg-primary/90' : 'bg-transparent'} h-7 w-7 rounded-full p-1`}
      >
        <Monitor strokeWidth={1} size={18} color={IconColor} />
      </button>

      <button
        onClick={() => setTheme('dark')}
        className={`${theme === 'dark' ? 'bg-primary/90' : 'bg-transparent'} h-7 w-7 rounded-full p-1`}
      >
        <Moon strokeWidth={1} size={18} color={IconColor} />
      </button>
    </div>
  )
}

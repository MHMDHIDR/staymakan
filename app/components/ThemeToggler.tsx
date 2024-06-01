'use client'

import { Monitor, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'

export default function ModeToggle() {
  const { setTheme, theme } = useTheme()
  // if system theme is enabled, we need to check if the user's system theme is dark or light, if it's dark then the color is '#ddd' else it's '#000'
  let IconColor =
    theme === 'dark' ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches && theme === 'system')
      ? '#ddd'
      : '#000'

  return (
    <div className='flex items-center rounded-full space-x-2 border p-1 max-w-fit mx-auto md:mx-0'>
      <Button
        onClick={() => setTheme('light')}
        className={`${
          theme === 'light' ? 'bg-primary/90' : 'bg-transparent'
        } w-7 h-7 p-1 rounded-full`}
      >
        <Sun strokeWidth={1} size={18} color={IconColor} />
      </Button>
      <Button
        onClick={() => setTheme('system')}
        className={`${
          theme === 'system' ? 'bg-primary/90' : 'bg-transparent'
        } w-7 h-7 p-1 rounded-full`}
      >
        <Monitor strokeWidth={1} size={18} color={IconColor} />
      </Button>

      <Button
        onClick={() => setTheme('dark')}
        className={`${
          theme === 'dark' ? 'bg-primary/90' : 'bg-transparent'
        } w-7 h-7 p-1 rounded-full`}
      >
        <Moon strokeWidth={1} size={18} color={IconColor} />
      </Button>
    </div>
  )
}

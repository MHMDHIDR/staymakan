'use client'

import { Monitor, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'

export default function ModeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <div className='flex items-center rounded-full space-x-2 border p-1'>
      <Button
        onClick={() => setTheme('light')}
        className={`${
          theme === 'light' ? 'bg-primary/90' : 'bg-transparent'
        } w-7 h-7 p-1 rounded-full`}
      >
        <Sun strokeWidth={1} size={18} color={theme === 'light' ? '#0c0909' : '#ddd'} />
      </Button>
      <Button
        onClick={() => setTheme('dark')}
        className={`${
          theme === 'dark' ? 'bg-primary/90' : 'bg-transparent'
        } w-7 h-7 p-1 rounded-full`}
      >
        <Monitor
          strokeWidth={1}
          size={18}
          color={theme === 'light' ? '#0c0909' : '#ddd'}
        />
      </Button>
      <Button
        onClick={() => setTheme('system')}
        className={`${
          theme === 'system' ? 'bg-primary/90' : 'bg-transparent'
        } w-7 h-7 p-1 rounded-full`}
      >
        <Moon strokeWidth={1} size={18} color={theme === 'light' ? '#0c0909' : '#ddd'} />
      </Button>
    </div>
  )
}

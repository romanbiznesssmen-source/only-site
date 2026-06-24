'use client'
import { useEffect, useState } from 'react'

export default function useCountdown() {
  const [time, setTime] = useState({ h: '00', m: '00', s: '00' })

  useEffect(() => {
    const getTarget = () => {
      const t = new Date()
      t.setHours(23, 59, 0, 0)
      if (new Date() > t) t.setDate(t.getDate() + 1)
      return t
    }
    let target = getTarget()

    const tick = () => {
      const diff = target.getTime() - Date.now()
      if (diff <= 0) { target = getTarget(); return }
      setTime({
        h: String(Math.floor(diff / 3600000)).padStart(2, '0'),
        m: String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0'),
        s: String(Math.floor((diff % 60000) / 1000)).padStart(2, '0'),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return time
}

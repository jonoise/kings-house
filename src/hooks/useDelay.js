import {
  useEffect,
  useState
} from 'react'

const useDelay = (delay) => {
  const [_delay, setDelay] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDelay(false)
    }, delay)

    return () => clearTimeout(timeout)

  }, [delay])

  return _delay
}

export default useDelay
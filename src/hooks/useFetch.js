import {
  useCallback,
  useState
} from 'react'
import axios from '../lib/http'

const useFetch = () => {
  const [res, setRes] = useState({
    data: null,
    error: null,
    loading: false,
  })

  const makeRequest = useCallback(
    (url) => {
      setRes((prev) => ({
        ...prev,
        loading: true,
      }))
      axios
        .get(url)
        .then((res) =>
          setRes({
            data: res.data,
            error: null,
            loading: false,
          })
        )
        .catch((err) =>
          setRes({
            data: null,
            error: err,
            loading: false,
          })
        )
    },
    [setRes]
  )

  return [res, makeRequest]
}

export default useFetch
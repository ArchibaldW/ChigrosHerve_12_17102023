import { useState, useEffect } from 'react'
import { userService } from '../_services'
import homeDataFactory from '../factories/homeDataFactory'

export default function useHomeData() {
  const [userInformations, setUserInformations] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    async function fetchData() {
      let res = null
      if (process.env.REACT_APP_MOKED_DATA === 'false') {
        res = await userService.getUserInformations(
          process.env.REACT_APP_USER_ID
        )
      } else {
        res = await fetch(process.env.REACT_APP_MOKED_DATA_URL)
        res = await res.json()
      }
      if (res) {
        const data = new homeDataFactory(res)
        setUserInformations(data)
      } else {
        setIsError(true)
      }
      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
    }

    fetchData()
  }, [])

  return { userInformations, isLoading, isError }
}

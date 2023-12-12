import { useState, useEffect } from 'react'
import { userService } from '../_services'

export default function useHomeData() {
  const [userInformations, setUserInformations] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const data = await userService.getUserInformations(
        process.env.REACT_APP_USER_ID
      )
      if (data) {
        setUserInformations(data.data)
      } else {
        setIsError(true)
      }
      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
    }

    fetchData()
  }, [])

  return {userInformations, isLoading, isError}
}

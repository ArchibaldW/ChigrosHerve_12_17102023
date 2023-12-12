import { useState, useEffect } from 'react'
import { userService } from '../_services'

export default function useAverageSessionsData() {
  const [userAverageSessions, setUserAverageSessions] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const res = await userService.getUserAverageSessions(
        process.env.REACT_APP_USER_ID
      )
      if (res !== process.env.REACT_APP_USER_ERROR_MESSAGE) {
        setUserAverageSessions(res.data)
      } else {
        setIsError(true)
      }
      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
    }

    fetchData()
  }, [])

  return {userAverageSessions, isLoading, isError}
}

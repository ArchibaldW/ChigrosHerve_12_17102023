import { useState, useEffect } from 'react'
import { userService } from '../_services'
import averageSessionsDataFactory from '../factories/averageSessionsChartDataFactory'

export default function useAverageSessionsData() {
  const [userAverageSessions, setUserAverageSessions] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    async function fetchData() {
      let res = null
      if (process.env.REACT_APP_MOKED_DATA === 'false') {
        res =await userService.getUserAverageSessions(process.env.REACT_APP_USER_ID)
      } else {
        res = await fetch(process.env.REACT_APP_MOKED_DATA_URL)
        res = await res.json()
      }
      if (res !== process.env.REACT_APP_USER_ERROR_MESSAGE) {
        const data = new averageSessionsDataFactory(res)
        setUserAverageSessions(data)
      } else {
        setIsError(true)
      }
      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
    }

    fetchData()
  }, [])

  return { userAverageSessions, isLoading, isError }
}

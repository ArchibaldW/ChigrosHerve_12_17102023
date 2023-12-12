import { useState, useEffect } from 'react'
import { userService } from '../_services'

export default function useActivityChartData() {
  const [userActivityData, setUserActivityData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const res = await userService.getUserActivity(
        process.env.REACT_APP_USER_ID
      )
      if (res !== process.env.REACT_APP_USER_ERROR_MESSAGE) {
        res.data.sessions.forEach((session, index) => {
          session.day = index + 1
        })
        setUserActivityData(res.data.sessions)
      } else {
        setIsError(true)
      }
      setTimeout(() => {
        setIsLoading(false)
      }, 500)
    }

    fetchData()
  }, [])

  return {userActivityData, isLoading, isError}
}

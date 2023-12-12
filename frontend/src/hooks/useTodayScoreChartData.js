import { useState, useEffect } from 'react'
import { userService } from '../_services'
import todayScoreChartFactory from '../factories/todayScoreChartFactory'

export default function useTodayScoreChartData() {
  const [todayScore, setTodayScore] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const res = await userService.getUserInformations(
        process.env.REACT_APP_USER_ID
      )

      if (res !== process.env.REACT_APP_USER_ERROR_MESSAGE) {
        const data = new todayScoreChartFactory(res)
        setTodayScore(data)
      } else {
        setIsError(true)
      }
      setTimeout(() => {
        setIsLoading(false)
      }, 2000)
    }

    fetchData()
  }, [])

  return { todayScore, isLoading, isError }
}

import { useState, useEffect } from 'react'
import { userService } from '../_services'
import performanceChartDataFactory from '../factories/performanceChartFactory'

export default function usePerformanceChartData() {
  const [userPerformanceData, setUserPerformanceData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    async function fetchData() {
      let res = null
      if (process.env.REACT_APP_MOKED_DATA === 'false') {
        res = await userService.getUserPerformance(
          process.env.REACT_APP_USER_ID
        )
      } else {
        res = await fetch(process.env.REACT_APP_MOKED_DATA_URL)
        res = await res.json()
      }
      if (res !== process.env.REACT_APP_USER_ERROR_MESSAGE) {
        const data = new performanceChartDataFactory(res)
        setUserPerformanceData(data)
      } else {
        setIsError(true)
      }
      setTimeout(() => {
        setIsLoading(false)
      }, 1500)
    }

    fetchData()
  }, [])

  return { userPerformanceData, isLoading, isError }
}

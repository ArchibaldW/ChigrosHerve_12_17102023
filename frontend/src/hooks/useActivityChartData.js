import { useState, useEffect } from 'react'
import { userService } from '../_services'
import activityChartDataFactory from '../factories/activityChartDataFactory'

export default function useActivityChartData() {
  const [userActivityData, setUserActivityData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    async function fetchData() {
      let res = null
      if (process.env.REACT_APP_MOKED_DATA === 'false') {
        res = await userService.getUserActivity(process.env.REACT_APP_USER_ID)
      } else {
        res = await fetch(process.env.REACT_APP_MOKED_DATA_URL)
        res = await res.json()
      }
      if (res !== process.env.REACT_APP_USER_ERROR_MESSAGE) {
        const data = new activityChartDataFactory(res)
        setUserActivityData(data)
      } else {
        setIsError(true)
      }
      setTimeout(() => {
        setIsLoading(false)
      }, 500)
    }

    fetchData()
  }, [])

  return { userActivityData, isLoading, isError }
}

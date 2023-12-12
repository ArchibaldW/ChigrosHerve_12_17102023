import { useState, useEffect } from 'react'
import { userService } from '../_services'

export default function usePerformanceChartData() {
  const [userPerformanceData, setUserPerformanceData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const kindFr = {
      intensity: 'Intensité',
      speed: 'Vitesse',
      strength: 'Force',
      endurance: 'Endurance',
      energy: 'Energie',
      cardio: 'Cardio',
    }

    async function fetchData() {
      const res = await userService.getUserPerformance(
        process.env.REACT_APP_USER_ID
      )
      if (res !== process.env.REACT_APP_USER_ERROR_MESSAGE) {
        const temporaryUserData = res.data.data.map((data) => {
          return {
            kind: res.data.kind[data.kind],
            value: data.value,
          }
        })

        const userData = []
        for (const [kind, value] of Object.entries(kindFr)) {
          for (const data of temporaryUserData) {
            if (data.kind === kind) {
              userData.push({
                kind: value,
                value: data.value,
                fullMark: 200,
              })
            }
          }
        }
        setUserPerformanceData(userData)
      } else {
        setIsError(true)
      }
      setTimeout(() => {
        setIsLoading(false)
      }, 1500)
    }

    fetchData()
  }, [])

  return {userPerformanceData, isLoading, isError}
}

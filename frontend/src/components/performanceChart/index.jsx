import { useState, useEffect } from 'react'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts'

import './style.scss'
import { userService } from '../../_services'
import Error from '../error'
import Loader from '../loader'

export default function PerformanceChart() {
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

  if (isLoading) {
    return <Loader isBottom />
  }

  if (isError) {
    return <Error isBottom />
  }

  return (
    <div className='radar-chart'>
      <ResponsiveContainer width='100%' height='100%'>
        <RadarChart
          outerRadius='50%'
          data={userPerformanceData}
          padding={'5px'}
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey='kind'
            tick={{ fontSize: '12', fontWeight: '500', fill: '#FFFFFF' }}
          />
          <PolarRadiusAxis tick={false} axisLine={false} />
          <Radar
            name='performance'
            dataKey='value'
            stroke='rgba(255, 1, 1, 0.7)'
            fill='rgba(255, 1, 1, 0.7)'
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

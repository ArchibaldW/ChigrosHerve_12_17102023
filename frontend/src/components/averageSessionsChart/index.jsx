import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Rectangle,
} from 'recharts'
import { useState, useEffect } from 'react'

import './style.scss'
import { userService } from '../../_services'
import Error from '../error'
import Loader from '../loader'

export default function AverageSessionsChart() {
  const [userAverageSessions, setUserAverageSessions] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  function axisFormater(value) {
    switch (value) {
      case 1:
        return 'L'
      case 2:
        return 'M'
      case 3:
        return 'M'
      case 4:
        return 'J'
      case 5:
        return 'V'
      case 6:
        return 'S'
      case 7:
        return 'D'
      default:
        return value
    }
  }

  function CustomTooltip({ active, payload }) {
    if (active && payload && payload.length) {
      return (
        <div className='average-sessions-chart-custom-tooltip'>{`${payload[0].value} min`}</div>
      )
    }

    return null
  }

  function CustomCursor({ points }) {
    const X = points[0].x
    const Y = points[0].y

    return (
      <Rectangle
        width={1000}
        height={1000}
        x={X}
        y={Y - 100}
        style={{ background: 'black', opacity: 0.1 }}
      />
    )
  }

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

  if (isLoading) {
    return <Loader isBottom />
  }

  if (isError) {
    return <Error isBottom />
  }

  return (
    <div className='average-sessions-chart'>
      <h2 className='average-sessions-chart__title'>
        Durée moyenne des <br />
        sessions
      </h2>
      <ResponsiveContainer width='100%' height='100%'>
        <LineChart
          data={userAverageSessions.sessions}
          margin={{ top: 0, right: 12, bottom: 24, left: 12 }}
        >
          <defs>
            <linearGradient id='colorPV' x1='0%' y1='0%' x2='100%' y2='0%'>
              <stop offset='0%' stopColor='#FFFFFF' stopOpacity={0.3} />
              <stop offset='100%' stopColor='#FFFFFF' stopOpacity={1} />
            </linearGradient>
          </defs>
          <Line
            type='monotone'
            dataKey='sessionLength'
            strokeWidth={3}
            dot={false}
            stroke='url(#colorPV)'
            activeDot={{
              stroke: 'rgba(255,255,255, 0.2)',
              strokeWidth: 10,
              r: 5,
            }}
          />
          <YAxis hide={true} domain={[0, 'dataMax+30']} />
          <XAxis
            dy={16}
            axisLine={false}
            tickLine={false}
            padding={{ left: 10, right: 10 }}
            dataKey='day'
            tick={{
              fill: '#FFFFFF',
              opacity: 0.5,
              fontSize: '12px',
              fontWeight: '500',
            }}
            tickFormatter={axisFormater}
          />
          <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

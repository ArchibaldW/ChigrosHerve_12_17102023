import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts'

import './style.scss'
import Error from '../error'
import Loader from '../loader'
import usePerformanceChartData from '../../hooks/usePerformanceChartData'

export default function PerformanceChart() {
  const { userPerformanceData, isLoading, isError } = usePerformanceChartData()

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

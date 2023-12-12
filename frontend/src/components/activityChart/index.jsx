import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

import './style.scss'
import Error from '../error'
import Loader from '../loader'
import useActivityChartData from '../../hooks/useActivityChartData'

export default function ActivityChart() {
  const { userActivityData, isLoading, isError } = useActivityChartData()

  function CustomTooltip({ active, payload }) {
    if (active && payload && payload.length) {
      return (
        <div className='activity-chart-custom-tooltip'>
          <div>{`${payload[0].value}kg`}</div>
          <div>{`${payload[1].value}kCal`}</div>
        </div>
      )
    }

    return null
  }

  if (isLoading) {
    return (
      <div className='activity-chart'>
        <Loader />
      </div>
    )
  }

  if (isError) {
    return (
      <div className='activity-chart'>
        <Error />
      </div>
    )
  }

  return (
    <div className='activity-chart'>
      <div className='activity-chart__header'>
        <h2 className='activity-chart__header__title'>Activité quotidienne</h2>
        <div className='activity-chart__header__legend'>
          <span>
            <span className='activity-chart__header__legend__weight-bullet'></span>{' '}
            Poids (kg)
          </span>{' '}
          <span>
            <span className='activity-chart__header__legend__calories-bullet'></span>{' '}
            Calories brulées (kCal)
          </span>
        </div>
      </div>
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart
          data={userActivityData}
          margin={{ top: 112, right: 20, bottom: 30, left: 20 }}
          barCategoryGap='35%'
        >
          <CartesianGrid strokeDasharray='3 3' vertical={false} />
          <XAxis
            dataKey='day'
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: '14', fontWeight: '500', color: '#9B9EAC' }}
            dy={16}
          />
          <YAxis
            yAxisId='left'
            orientation='left'
            tickLine={false}
            axisLine={false}
            domain={['dataMin-2', 'dataMax + 2']}
            tick={{ fontSize: '14', fontWeight: '500' }}
            dx={-16}
          />
          <YAxis
            yAxisId='right'
            orientation='right'
            tickLine={false}
            axisLine={false}
            domain={[0, 'dataMax + 50']}
            tick={{ fontSize: '14', fontWeight: '500' }}
            dx={16}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            yAxisId='left'
            dataKey='kilogram'
            fill='#282D30'
            radius={[50, 50, 0, 0]}
            maxBarSize={7}
          />
          <Bar
            yAxisId='right'
            dataKey='calories'
            fill='#E60000'
            radius={[50, 50, 0, 0]}
            maxBarSize={7}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

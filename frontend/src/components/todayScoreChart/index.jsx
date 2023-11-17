import { useState, useEffect } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

import { userService } from '../../_services'
import Error from '../error'
import Loader from '../loader'

import './style.scss'

export default function TodayScoreChart() {
  const [todayScore, setTodayScore] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const fakeData = [{ score: 100 }]
  const COLORS = ['#FF0000', '#FBFBFB']

  useEffect(() => {
    async function fetchData() {
      const res = await userService.getUserInformations(
        process.env.REACT_APP_USER_ID
      )
      if (res !== process.env.REACT_APP_USER_ERROR_MESSAGE) {
        setTodayScore([
          { score: res.data.todayScore },
          { score: 1 - res.data.todayScore },
        ])
      } else {
        setIsError(true)
      }
      setTimeout(() => {
        setIsLoading(false)
      }, 2000)
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
    <div className='today-score-chart'>
      <h2 className='today-score-chart__title'>Score</h2>
      <div className='today-score-chart__objective'>
        <div className='today-score-chart__objective__percent'>
          {todayScore[0].score * 100}%
        </div>
        <div>de votre objectif</div>
      </div>
      <ResponsiveContainer width='100%' height='100%'>
        <PieChart>
          <Pie
            data={fakeData}
            dataKey='score'
            cx='50%'
            cy='50%'
            outerRadius={60}
            fill='#FFFFFF'
            onClick={null}
          />
          <Pie
            data={todayScore}
            dataKey='score'
            startAngle={90}
            endAngle={450}
            innerRadius={50}
            outerRadius={60}
            cornerRadius={25}
            onClick={null}
            fill='#82ca9d'
          >
            {todayScore.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

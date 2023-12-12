import './style.scss'
import PageNotFound from '../pageNotFound'
import UserKeyData from '../../components/userKeyData'
import PerformanceChart from '../../components/performanceChart'
import AverageSessionsChart from '../../components/averageSessionsChart'
import TodayScoreChart from '../../components/todayScoreChart'
import ActivityChart from '../../components/activityChart'
import Loader from '../../components/loader'
import useHomeData from '../../hooks/useHomeData'

export default function Home() {
  const { userInformations, isLoading, isError } = useHomeData()

  if (isLoading) {
    return (
      <div className='home'>
        <Loader />
      </div>
    )
  }

  if (isError) {
    return <PageNotFound />
  }

  return (
    <div className='home'>
      <div className='home__header'>
        <h1 className='home__header__title'>
          Bonjour{' '}
          <span className='home__header__title__username'>
            {userInformations.userInfos.firstName}
          </span>
        </h1>
        <div className='home__header__subtitle'>
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </div>
      </div>
      <div className='home__main'>
        <div className='home__main__graphs'>
          <ActivityChart />
          <div className='home__main__graphs__bottom'>
            <AverageSessionsChart />
            <PerformanceChart />
            <TodayScoreChart />
          </div>
        </div>
        <UserKeyData data={userInformations.keyData} />
      </div>
    </div>
  )
}

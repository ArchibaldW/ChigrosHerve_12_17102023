import './style.scss'
import KeyDataCard from './keyDataCard'

export default function userKeyData({ data }) {
  return (
    <div className='user-key-data'>
      {Object.entries(data).map(([ key, value ]) => {
        return <KeyDataCard key={key} nutriment={key} value={value} />
      })}
    </div>
  )
}

import './style.scss'

export default function Loader({ isBottom = false }) {
  return (
    <div className={`loader ${isBottom ? 'loader__bottom' : ''}`}>
      <div className='loading'></div>
    </div>
  )
}

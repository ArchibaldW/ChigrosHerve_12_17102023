import './style.scss'

export default function Error({ isBottom = false }) {
  return (
    <div className={`error ${isBottom ? 'error__bottom' : ''}`}>
      There was an error loading data
    </div>
  )
}

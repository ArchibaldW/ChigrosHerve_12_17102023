import calorieCountIcon from './images/calorieCount.svg'
import proteinCountIcon from './images/proteinCount.svg'
import carbohydrateCountIcon from './images/carbohydrateCount.svg'
import lipidCountIcon from './images/lipidCount.svg'

export default function keyDataCard({ nutriment, value }) {
  const keys = {
    calorieCount: {
      frName: 'Calories',
      icon: calorieCountIcon,
      unit: 'kCal',
    },
    proteinCount: {
      frName: 'Protéines',
      icon: proteinCountIcon,
      unit: 'g',
    },
    carbohydrateCount: {
      frName: 'Glucides',
      icon: carbohydrateCountIcon,
      unit: 'g',
    },
    lipidCount: {
      frName: 'Lipides',
      icon: lipidCountIcon,
      unit: 'g',
    },
  }

  return (
    <div className='key-data-card'>
      <img
        className='key-data-card__icon'
        src={keys[nutriment].icon}
        alt={keys[nutriment].frName}
      />
      <div>
        <div className='key-data-card__value'>
          {value}
          {keys[nutriment].unit}
        </div>
        <div className='key-data-card__key'>{keys[nutriment].frName}</div>
      </div>
    </div>
  )
}

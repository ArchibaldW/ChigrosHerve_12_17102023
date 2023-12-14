const kindFr = {
  intensity: 'Intensité',
  speed: 'Vitesse',
  strength: 'Force',
  endurance: 'Endurance',
  energy: 'Energie',
  cardio: 'Cardio',
}

export default class performanceChartDataFactory {
  constructor(res) {
    if (process.env.REACT_APP_MOKED_DATA === 'false') {
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
      return userData
    } else {
      return res.data.performance
    }
  }
}

export default class todayScoreChartFactory {
  constructor(res) {
    if (process.env.REACT_APP_MOKED_DATA === 'false') {
      return [
        { score: res.data.todayScore },
        { score: 1 - res.data.todayScore },
      ]
    } else {
      return [{ score: 0.18 }, { score: 0.82 }]
    }
  }
}

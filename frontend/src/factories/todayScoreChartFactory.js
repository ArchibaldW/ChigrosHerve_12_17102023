export default class todayScoreChartFactory {
  constructor(res) {
    if (process.env.REACT_APP_MOKED_DATA === 'false') {
      return [
        { score: res.data.todayScore || res.data.score },
        { score: 1 - (res.data.todayScore || res.data.score) },
      ]
    } else {
      return [
        { score: res.data.todayScore },
        { score: 1 - res.data.todayScore },
      ]
    }
  }
}

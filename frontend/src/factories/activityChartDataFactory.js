export default class activityChartDataFactory {
  constructor(res) {
    if (process.env.REACT_APP_MOKED_DATA === 'false') {
      res.data.sessions.forEach((session, index) => {
        session.day = index + 1
      })
      return res.data.sessions
    } else {
      return res.data.activity
    }
  }
}

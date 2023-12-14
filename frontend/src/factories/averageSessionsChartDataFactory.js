export default class averageSessionsDataFactory {
  constructor(res) {
    if (process.env.REACT_APP_MOKED_DATA === 'false') {
      return res.data.sessions
    } else {
      return res.data.averageSessions
    }
  }
}

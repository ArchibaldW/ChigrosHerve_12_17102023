export default class homeDataFactory {
  constructor(res) {
    if (process.env.REACT_APP_MOKED_DATA === 'false') {
      return res.data
    } else {
      return res.data.home
    }
  }
}

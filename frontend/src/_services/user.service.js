export const userService = {
  getUserInformations,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
}

/**
 * Retrieves information from a user. This first endpoint includes the user id,
 * user information (first name, last name and age), the current day's score (todayScore)
 * and key data (calorie, macronutrient, etc.).
 * @param {number} userId
 * @return {Object}
 */
async function getUserInformations(userId) {
  const res = await fetch(
    `${process.env.REACT_APP_PUBLIC_API_URL}/user/${userId}/`
  )
  if (res) {
    return await res.json()
  }
}

/**
 * Retrieves a user's activity day by day with kilograms and calories.
 * @param {Number} userId
 * @return {Object}
 */
async function getUserActivity(userId) {
  const res = await fetch(
    `${process.env.REACT_APP_PUBLIC_API_URL}/user/${userId}/activity`
  )
  if (res) {
    return await res.json()
  }
}

/**
 * Retrieves the average sessions of a user per day. The week starts on Monday.
 * @param {number} userId
 * @return {Object}
 */
async function getUserAverageSessions(userId) {
  const res = await fetch(
    `${process.env.REACT_APP_PUBLIC_API_URL}/user/${userId}/average-sessions`
  )
  if (res) {
    return await res.json()
  }
}

/**
 * Retrieves a user's performance (energy, endurance, etc.).
 * @param {number} userId
 * @return {Object}
 */
async function getUserPerformance(userId) {
  const res = await fetch(
    `${process.env.REACT_APP_PUBLIC_API_URL}/user/${userId}/performance`
  )
  if (res) {
    return await res.json()
  }
}

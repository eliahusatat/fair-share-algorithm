let apiURL
const apiUrl = {
  local: 'http://localhost:3002/',
  production: `${window.location.protocol}//${window.location.hostname}`
}
if (window.location.hostname === 'localhost') { apiURL = apiUrl.local } else { apiURL = apiUrl.production }
module.exports = {
  apiURL
}

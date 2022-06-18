let apiURL
const apiUrlMap = {
  local: 'http://localhost:3002/',
  production: `${window.location.protocol}//${window.location.hostname}`
}
if (window.location.hostname === 'localhost') { apiURL = apiUrlMap.local } else { apiURL = apiUrlMap.production }
module.exports = {
  apiURL
}

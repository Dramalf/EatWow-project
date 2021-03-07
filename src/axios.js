const axios = require('axios')

exports.Axios= axios.create({ headers: { 'content-type': 'application/x-www-form-urlencoded' } })
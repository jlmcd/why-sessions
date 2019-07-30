import axios from 'axios'

export const click = updateClicks => {
  axios.post('/api/clicks').then(res => updateClicks(res.data))
}

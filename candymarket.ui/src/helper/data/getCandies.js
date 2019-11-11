import axios from 'axios';

const baseUrl = 'http://localhost:60640';

const getAllCandies = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/candy`)
    .then((resp) => {
      resolve(resp)
    })
    .catch(err => reject(err));

});

export default { getAllCandies };
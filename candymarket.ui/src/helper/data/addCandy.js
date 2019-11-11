import axios from 'axios';

const baseUrl = 'http://localhost:60640/candy';

const addCandy = (newCandy) => axios.post(baseUrl, newCandy)

export default { addCandy };
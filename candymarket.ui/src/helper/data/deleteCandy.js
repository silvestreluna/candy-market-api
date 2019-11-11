import axios from 'axios';

const baseUrl = 'http://localhost:60640';

const deleteCandyById = (candyId) => axios.delete(`${baseUrl}/candy/${candyId}/eat`);

export default { deleteCandyById };
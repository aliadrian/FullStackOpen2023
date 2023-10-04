import axios from 'axios'
const baseUrl = 'http://localhost:3001/notes'

const getAll = async () => {
  const request = axios.get(baseUrl)
  const response = await request
  return response.data
}

const generateUniqueId = () => {
  const timestamp = new Date().getTime(); // Get current timestamp
  const random = Math.floor(Math.random() * 10000); // Generate a random number

  return `${timestamp}-${random}`;
};

const create = async (newObject) => {

  // const existingNote = await axios.get(`${baseUrl}/${newObject.id}`)

  // if (existingNote) {
  //   newObject.id = generateUniqueId();
  // }
  const request = axios.post(baseUrl, newObject)
  const response = await request
  return response.data
}

const update = async (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  const response = await request
  return response.data
}

export default { getAll, create, update }
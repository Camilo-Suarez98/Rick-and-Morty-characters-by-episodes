import axios from "axios"

const getEpisodes = async () => {
  const { data } = await axios.get('https://rickandmortyapi.com/api/episode')
  return data.results
}

// const getCharacters = async () => {
//   const { data } = await axios.get(`${url}/character`)
//   return data.results
// }

export {
  getEpisodes
}
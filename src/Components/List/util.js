import axios from "axios"

const getEpisodes = async () => {
  const { data } = await axios.get('https://rickandmortyapi.com/api/episode')
  return data.results
}

const getCharacter = async (url) => {
  const { data } = await axios.get(url)
  return data
}

const getData = async () => {
  const episodes = getEpisodes()

  const characters = episodes.reduce((acc, item) => {
    return [...acc, ...item.characters.slice(0, 10)]
  }, [])

  const charactersPromise = characters.map(url => {
    return getCharacter(url)
  })

  const parallelPromise = await Promise.all(charactersPromise)

  const data = episodes.map((episode) => {
    return {
      id: episode.episode,
      title: `${episode.name} - ${episode.episode}`,
      dateToAir: episode.air_date,
      characters: episode.characters.slice(0, 10).map((url) => {
        return parallelPromise.find((item) => item.url === url)
      })
    }
  })

  return data;
}

export {
  getData
}
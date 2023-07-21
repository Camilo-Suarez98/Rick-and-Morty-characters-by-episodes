import React, { useState, useEffect } from "react"
import axios from "axios"
import { getEpisodes } from "./util"

const List = () => {
  const [ episodes, setEpisodes ] = useState([])

  useEffect(() => {
    fetchEpisodes()
  }, [])

  const fetchEpisodes = async () => {
    const episodePromise = getEpisodes()
    const [ episodeData ] = await Promise.all([ episodePromise ])
    setEpisodes(episodeData)
  }

  const fetchCharacters = async () => {
    const fetchCharactersByEpisode = episodes.map(episode => (
      episode.characters.slice(0, 10).map(character => character)
    ))
  }
  fetchCharacters()

  return (
    <div>
      <ul>
        {
          episodes.map(episode => {
            return (
              <React.Fragment key={episode.id}>
                <li><h2>{episode.name} - {episode.episode}</h2></li>
                <ul>
                  {episode.characters.slice(0, 10).map((character, index) => {
                    return (
                      <li key={index}>{character}</li>
                    )
                  })}
                </ul>
              </React.Fragment>
            )
          })
        }
      </ul>
    </div>
  )
}

export default List
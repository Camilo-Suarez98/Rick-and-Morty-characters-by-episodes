import React, { useState, useEffect } from "react"
import { getData } from "./util"

const List = () => {
  const [episodes, setEpisodes] = useState([])

  useEffect(() => {
    getData().then(data => {
      setEpisodes(data)
    })
  }, [])

  return (
    <div>
      <ul>
        {
          episodes.map(episode => {
            return (
              <React.Fragment key={episode.id}>
                <li><h2>{episode.title} - {episode.episode}</h2></li>
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
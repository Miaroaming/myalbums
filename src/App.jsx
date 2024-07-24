import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Music = () => {
  const [musics, setMusics] = useState([]);

  useEffect(() => {
    // HTTP request inside here
    axios.get('./MUSIC.json')
      .then(response => {
        console.log(response.data);
        setMusics(response.data);
      }) // success
      .catch(error => {
        console.error(error);
      }); // error
  }, []); // dependency left empty so it only runs once

  // Music cards
  const MusicCard = ({ musics }) => {
    const mappedMusics = musics.map((music, index) => {
      return (
        <div key={index} id="individual-card">
          <img src={music.image} alt={music.name} />
          <div id="caption">
            <h2>{music.name}, {music.date}</h2>
            <h3>{music.artist}</h3>
          </div>
        </div>
      ); // end of the map return
    });

    return (
      <>
        {mappedMusics}
      </>
    ); // end of the music card return
  };

  // MASTER RETURN
  return (
    <div id="card">
      <MusicCard musics={musics} />
    </div>
  );
};

export default Music;
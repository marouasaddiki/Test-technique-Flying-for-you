import React, { useEffect, useState } from "react";
import DataMovies from '../list-de-films'
import styled from 'styled-components'
import './Grille.css'
import Modal from './Modal'

// Button Modal
const Button = styled.button`
width: 80px;
height: 40px;
border-style: none;
background-color: #ff3838;
color:#fff;
font-size: 25px;
box-shadow: 0px 2px 3px rgba(0,0,0,.4);
transition: all .5s ease-in-out;
transform: scale(.95) translateX(-5px);
      `

function Grille() {
  // Show Modal
  const [showModal, setShowModal] = useState(false)
  // Filter , Show Modal
  const [movies, setMovies] = useState([]);
  const [moviesSearch, setMoviesSearch] = useState(null)
  const [movie, setMovie] = useState({})


  useEffect(() => {
    setMovies(DataMovies)
  }, []);

  //  open Modal
  const openModal = (DataMovies) => {
    setShowModal(prev => !prev)
    setMovie(DataMovies)
  }

  // Filter by title  
  let handleSearch = ((e) => {
    let value = e.target.value.toLowerCase()

    setMoviesSearch(movies.filter((mv) => {
      if (mv?.original_title) {
        return mv.original_title.toLowerCase().includes(value)
      }
    }))
  })

  return (
    <>
      <div className="container">
        <div className="search">
          <h1 className="film">My Cinema</h1>
          <div id="fetch" >
            <input onChange={handleSearch} type="text" placeholder="Entrez le titre du film ici" id="term" />
            <button id="search">Chercher</button>
          </div>
        </div>
      </div>
      <div className="container_wrapper">
        {
          (moviesSearch || movies).map((val, index) => {
            return (
              <div className="wrapper" key={index}>
                <div className="card" >
                  <img src={"http://image.tmdb.org/t/p/w500" + val.poster_path} alt={val.original_title} className="poster" />
                  <div className="descriptions">
                    <h1> {val.title}</h1>
                    <p><strong>Langage de réalisation :</strong>
                      {val.original_language}</p>
                    <p className="date"><strong>La date de réalisation :</strong> {val.release_date}</p>
                    <Button onClick={() =>
                      openModal(val)
                    } >Plus</Button>
                  </div>
                </div>
              </div>
            )
          })
        }
        {/* props to page modal */}
        <Modal showModal={showModal} setShowModal={setShowModal} movie={movie} />
      </div>
    </>
  )
}

export default Grille


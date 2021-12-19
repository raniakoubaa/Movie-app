import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState } from 'react'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home';
// import MovieList from './Components/MovieList/MovieList';
import AddModel from './Components/AddModel/AddModel';
import Search from './Components/Search/Search';
import SearchRating from './Components/Search/SearchRating';
import MovieList from './Components/MovieList/MovieList';

function App(){
  const [ListM, setListM] = useState([
    {
      id: Math.random(),
      Title: "Spirit: Stallion of the Cimarron",
      Url: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgyOTUzNDA1N15BMl5BanBnXkFtZTYwNjgwMDM3._V1_SX300.jpg",
      description: "A wild stallion is captured by humans and slowly loses the will to resist training. Yet throughout his struggles for freedom, the stallion refuses to let go of the hope of one day returning home to his herd.",
      Rating: 3,
      year:"2002"
    },
    {
      id: Math.random(),
      Title: "The Addams Family 2",
      Url: "https://m.media-amazon.com/images/M/MV5BNzQ5NzJjMDgtNzhjMC00NTQ2LTgzOTUtZThiMWMwYmYwMGYxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
      description: "The Addams get tangled up in more wacky adventures and find themselves involved in hilarious run-ins with all sorts of unsuspecting characters. Sequel to the 2019 animated film, 'The Addams Family'.",
      Rating: 3,
      year:"2021"
    },
    {
      id: Math.random(),
      Title: "Harry Potter and the Half-Blood Prince",
      Url: "https://images-na.ssl-images-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_SX300.jpg",
      description: "As Harry Potter begins his sixth year at Hogwarts, he discovers an old book marked as the property of the Half-Blood Prince and begins to learn more about Lord Voldemort's dark past.",
      Rating: 3,
      year:" 2009"
    },
    {
      id: Math.random(),
      Title: "1917",
      Url: "https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_SX300.jpg",
      description: "Two young British soldiers during the First World War are given an impossible mission: deliver a message deep in enemy territory that will stop 1,600 men, and one of the soldiers' brothers, from walking straight into a deadly trap.",
      Rating: 5,
      year:" 2020"
    },
    {
      id: Math.random(),
      Title: "Miss Bala",
      Url: "https://m.media-amazon.com/images/M/MV5BMTcxNzY3Mzk5OF5BMl5BanBnXkFtZTgwNjQwODU1NjM@._V1_SX300.jpg",
      description: "Gloria finds a power she never knew she had when she is drawn into a dangerous world of cross-border crime.",
      Rating: 2,
      year:" 2019"
    },
    {
      id: Math.random(),
      Title: "The Boss Baby: Family Business",
      Url: "https://m.media-amazon.com/images/M/MV5BYWY1N2I5MGUtZTBmNS00MWZmLWEyNzAtZjliNzk0ZDVkYzI1XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg",
      description: "The Templeton brothers have become adults and drifted away from each other,",
      Rating: 3,
      year:" 2021"
    }
  ])
  const handleAdd = (title,url,rating,newyear)=>{
    setListM([...ListM,{id:Math.random(),Title:title, Url:url, Rating:rating, year:newyear , description:""}]);
  }
  
 

  return (
    <div className='App'>
      <Header />
      <AddModel handleAdd={handleAdd}/>
      <Home />
      <SearchRating List={ListM}/>
     <Search List={ListM}/>
     
     {/* <MovieList list={ListM}/> */}
    
    </div>
  )
  }


export default App


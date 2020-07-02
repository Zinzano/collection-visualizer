import React, { useState } from  'react';
import './App.css';
import Searchbar from "./components/Searchbar";
import Item from "./components/Item";
import axios from 'axios';


function App() {
    const [state, setState] = useState({
        searchQuery: "",
        results: [],
        selectedGame: {}
        }
    )

   const searchbarSearchHandler = (e) => {
       if (e.key === "Enter") {
           axios({
               method: 'get',
               headers: {
                   "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
                   "x-rapidapi-key": "f88bb6e14fmsh5c7e6d29330655ap1faad0jsn4679c15352d6"
               },
               url: "https://rawg-video-games-database.p.rapidapi.com/games",
               params: {
                   search: state.searchQuery
               }
           }).then(( {data} ) => {
               let res = data.results;
               console.log(res)

               setState(prevState => {
                   return { ...prevState, results: res}
               })

           });
       }
   }

    const searchboxInputHandler= (e) => {
        let s = e.target.value;

        setState( prevState => {
            return { ...prevState, searchQuery: s}
        });
    }


  return (
    <div className="App">
        <header>
            <h1>Collection visualizer</h1>
            <h2>Search for a game in the RAWG Video Games Database</h2>
        </header>

        <main>
            <Searchbar inputHandler={searchboxInputHandler} searchHandler={searchbarSearchHandler} />

            <section className="collection">

                { state.results.map(r => (
                    <Item key={r.id} item={r}/>
                ))}

            </section>
        </main>

    </div>
  );
}

export default App;

import { useState, useEffect } from 'react'
import Search from './Search.jsx'
import Spinner from './Spinner.jsx'
import MovieCard from './MovieCard.jsx'
import useDebounce from '../hooks/useDebounce'
import { getTrendingMovies, updateSearchCount } from '../appwrite'

// Je configure les briques pour faire fonctionner l'API
const API_BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjYxNzhlNGExM2Y2YWY0MDhmN2QyYmJmNzgxNDg3YiIsIm5iZiI6MTc2MjE3MjM0MC42NzI5OTk5LCJzdWIiOiI2OTA4OWRiNGZiODcxOTIzMDJlMTMwMDUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.3J7fFMRgr1P5E0h01jtgckR33WogQK0hcrQmj0dQWl0'
const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  },
}

function MainApp() {
    //Ca me servira  a enregistre les mots recherches
  const [searchTerm, setSearchTerm] = useState('')

  //Par ordre logique, le 1er me servira a enregistre la liste des films recuperes, la 2nd a stocke un message d'erreur selon la nature et 
  // le 3eme pour verifier si il y'a un chargement actuellement pour recuperer les films   
  const [movieList, setMovieList] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [trendingMovies, setTrendingMovies] = useState([]);

  //   J'utilise le hook de debounce pour eviter de faire trop de requetes a l'API quand l'utilisateur tape son mot cle
  const debouncedSearchTerm = useDebounce(searchTerm, 500);


    //   C'est la fonction qui va s'occuper de recuperer les films et de soumettre les requetes
  const fetchMovies = async (query = '') => {
    setIsLoading(true);

    try {
      const endpoint = query
        ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

      const response = await fetch(endpoint, API_OPTIONS);

      if(!response.ok) {
        throw new Error('Failed to fetch movies');
      }

      const data = await response.json();

      if(data.Response === 'False') {
        setErrorMessage(data.Error || 'Failed to fetch movies');
        setMovieList([]);
        return;
      }

    //   Si j'arrive la, c'est que tout s'est bien passe
      setMovieList(data.results || []);

      if(query && data.results.length > 0) {
        await updateSearchCount(query, data.results[0]);
      }
    } catch (error) {
      console.error(`Error fetching movies: ${error}`);
      setErrorMessage('Error fetching movies. Please try again later.');
    }finally {
        // Dans tout les cas, je desactive le chargement
      setIsLoading(false);
    }
  }

    // Je recupere les films tendances au chargement initial du composant
    const loadTrendingMovies = async () => {
    try {
      const movies = await getTrendingMovies();

      setTrendingMovies(movies);
    } catch (error) {
      console.error(`Error fetching trending movies: ${error}`);
    }
  }
    //   J'appelle la fonction une fois des l'execution
  useEffect(() => {
    fetchMovies(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  useEffect(() => {
    loadTrendingMovies();
  }, []);

  return (
    <main> 

      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1>Find <span className="text-gradient">Movies</span> You'll Enjoy Without the Hassle</h1>

          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>
        {trendingMovies.length > 0 && (
          <section className="trending">
            <h2>Trending Movies</h2>

            <ul>
              {trendingMovies.map((movie, index) => (
                <li key={movie.$id}>
                  <p>{index + 1}</p>
                  <img src={movie.poster_url} alt={movie.title} />
                </li>
              ))}
            </ul>
          </section>
        )}
        <section className="all-movies">
          <h2>All Movies</h2>
          
          {/* Je vais checker si la page est en chargement ou s'il y'a un message d'erreur a affciher  sinon j'affiche les films*/}
          {isLoading ? 
          <Spinner/> : errorMessage ?
        (<p className="text-red-500">{errorMessage}</p>) :
            <ul>
                {
                    // J'affiche la liste des films en accedant a chaque film via la brique MovieCard
                    movieList.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))
                }
            </ul>
            }
        </section> 
      </div>
    </main>
  )
}

export default MainApp

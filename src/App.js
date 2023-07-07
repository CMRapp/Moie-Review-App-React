import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Header from './components/header';
import Footer from './components/footer';
import MovieList from './components/movie-list';
import ReviewList from './components/review-list';

library.add(fab, faStar)

function App() {
  return (
    <div className="App">
      <Header/>
      <MovieList/>
      <Footer/>
    </div>
  );
}

export default App;

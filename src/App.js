import './App.css';
import Row from './component/Row'
import Banner from './component/Banner'
import request from './request'
import Nav from './component/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row isPoster={true} title='NetflixOriginals' fetchUrl={request.fetchNetflixOriginals}/>
      <Row title='Trending' fetchUrl={request.fetchTrending}/>
      <Row title='fetchTopRated' fetchUrl={request.fetchTopRated}/>
      <Row title='fetchActionMovies' fetchUrl={request.fetchActionMovies}/>
      <Row title='fetchComedyMovies' fetchUrl={request.fetchComedyMovies}/>
      <Row title='fetchHorrorMovies' fetchUrl={request.fetchHorrorMovies}/>
      <Row title='fetchRomanceMovies' fetchUrl={request.fetchRomanceMovies}/>
      <Row title='fetchDocumentaries' fetchUrl={request.fetchDocumentaries}/>

    </div>
  );
}

export default App;

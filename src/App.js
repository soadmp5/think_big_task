import "./App.css";
import Nav from "./Nav";
import SourcePages from "./SourcePages";
import ArticlePages from "./ArticlePages";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import SourceDetails from './SourceDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact element={ <Home/>} />
          <Route path="/sources" element={ <SourcePages/>} />
          <Route path="/articles" element={ <ArticlePages/>} />
          <Route path="/sources/:id" element={ <SourceDetails />}/>
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => <div>Home page</div>;

export default App;

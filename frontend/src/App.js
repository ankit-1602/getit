import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter as Router,Route} from 'react-router-dom'
import { Container } from 'react-bootstrap';
import HomeScreen from './screen/HomeScreen';
function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Route exact path="/" component={HomeScreen} />
        </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
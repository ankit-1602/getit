import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter as Router,Route} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import HomeScreen from './screen/HomeScreen';
import ProductScreen from "./screen/ProductScreen";
import CartScreen from "./screen/CartScreen";
function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart/:id?" component={CartScreen} />
          <Route exact path="/" component={HomeScreen} />
        </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
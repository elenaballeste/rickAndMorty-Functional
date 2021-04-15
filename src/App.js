import { Route } from 'react-router-dom';

import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home';
import Characters from './pages/Characters/Characters';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Layout>
      <Route path="/characters"> <Characters /></Route>
      <Route path="/" exact> <Home /></Route>
    </Layout>
  );
}

export default App;

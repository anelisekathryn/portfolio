import { Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './screens/Home.jsx'
import Layout from './components/Layout.jsx'


function App() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export default App;

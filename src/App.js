import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.scss';

import Header from './components/header/Header';
import Landing from './components/landing/Landing';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <div className="content">
          <Routes>
            <Route path='/' element={<Landing />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

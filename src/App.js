import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.scss';

import store from './store';

import Header from './components/header/Header';
import Landing from './components/landing/Landing';
import Footer from './components/footer/Footer';
import Analysis from './components/analysis/Analysis';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />

          <div className="content">
            <Routes>
              <Route path='/' element={<Landing />} />
              <Route path='/analysis/:address' element={<Analysis />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;

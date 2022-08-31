import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.scss';

import store from './store';

import Header from './components/header/Header';
import Landing from './pages/Landing';
import Footer from './components/footer/Footer';
import Analysis from './pages/Analysis';
import ScanResult from './pages/ScanResult';

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
              <Route path='/scan-result/:address' element={<ScanResult />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;

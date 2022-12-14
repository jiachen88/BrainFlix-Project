// Importing Assets
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../src/App.scss'
import imageMohan from './assets/images/Mohan-muruge.jpg'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Upload from './pages/upload';
// useState on Video-details.Json
function App() {

  return (
    <BrowserRouter>
      <div>
        {/* brainflix header wrapper */}
        <Header imageMohan={imageMohan} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/videos" element={<Home />} />
          <Route path="/videos/:videoId" element={<Home />} />
        </Routes>
      </div >
    </BrowserRouter>
  );
}
export default App;

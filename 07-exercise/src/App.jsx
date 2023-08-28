import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Menu from './pages/Menu';
import Counter from './pages/Counter';
import Timer from './pages/Timer';
import Filter from './pages/Filter';
import FetchApi from './pages/FetchApi';
import ChitChat from './pages/ChitChat';
import ChitChatAfter from './pages/ChitChatAfter';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Menu />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/timer' element={<Timer />} />
        <Route path='/filter' element={<Filter />} />
        <Route path='/fetch-api' element={<FetchApi />} />
        <Route path='/chit-chat' element={<ChitChat />} />
        <Route path='/chit-chat/after' element={<ChitChatAfter />} />
      </Routes>
    </>
  );
}

export default App;

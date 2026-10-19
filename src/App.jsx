import { 
  BrowserRouter, 
  Routes, 
  Route } from 'react-router';
import './styles/index.scss';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import NotFoundPage from './pages/NotFoundPage';
import ForumPage from './pages/ForumPage';
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProfilePage from './pages/ProflePage';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/auth' element={<AuthPage />} />
          <Route path='/forum' element={<ForumPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App

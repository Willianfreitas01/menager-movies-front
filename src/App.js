import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import { Login } from './pages/todo/login/login'
import { Home } from './pages/todo/home/home'
import { MovieId } from './pages/todo/movie/movie_edit'
import { RegisterMovie } from './pages/todo/movie/movie_create'
import { Modal } from './components/modal'
import reportWebVitals from './reportWebVitals'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/modal" element={<Modal />} />
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movie/:id" element={<MovieId />} />
        <Route path="/movie" element={<RegisterMovie />} />
      </Routes>
    </BrowserRouter>
  )
}
reportWebVitals()

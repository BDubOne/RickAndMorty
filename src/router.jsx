import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import AboutPage from './pages/AboutPage'
import CharactersPage from './pages/CharactersPage'
import NotFoundPage from './pages/NotFoundPage'
import HomePage from './pages/HomePage'
import SingleCharacterPage from './pages/SingleCharPage'
import FavoritesPage from './pages/FavoritesPage'
import ResultsPage from './pages/ResultsPage'


const router = createBrowserRouter([
    {
        path:'/',
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'about/',
                element: <AboutPage />

            },
            {
                path:'characters/',
                element: <CharactersPage />
            },
            {
                path:'character/:id',
                element: <SingleCharacterPage />
            },
            {
                path:'favorites/',
                element: <FavoritesPage />
            },
            {
                path:'/search-results/',
                element: <ResultsPage />
            },

        ],
        errorElement:<NotFoundPage />
    },
]);

export default router
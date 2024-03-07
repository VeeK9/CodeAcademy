import './App.css';
import TableGamesPage from './components/pages/TableGames/TableGamesPage';
import AddNewTableGamePage from './components/pages/AddNewTableGame/AddNewTableGamePage';
import Header from './components/UI/Header/Header';
import PageLoaderContext from './contexts/pageLoaderContext';
import { useContext } from 'react';
import EditTableGamePage from './components/pages/EditTableGame/EditTableGamePage';

const App = () => {

  const { pageLoader } = useContext(PageLoaderContext)

  return (
    <>
    { pageLoader !== 'redagavimas' && <Header /> }
    {
      pageLoader === "prideti" ? <AddNewTableGamePage/>
      : pageLoader === "korteles" ? <TableGamesPage/>
      : pageLoader === "redagavimas" ? <EditTableGamePage/>
      : null
    }
    </>
  );
}

export default App;

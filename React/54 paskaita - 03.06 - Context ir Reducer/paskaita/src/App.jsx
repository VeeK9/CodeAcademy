import './App.css';
import TableGamesPage from './components/pages/TableGames/TableGamesPage';
import AddNewTableGamePage from './components/pages/AddNewTableGame/AddNewTableGamePage';
import Header from './components/UI/Header/Header';
import PageLoaderContext from './contexts/pageLoaderContext';
import { useContext } from 'react';

const App = () => {

  const { pageLoader } = useContext(PageLoaderContext)

  return (
    <>
    <Header />
      {
        pageLoader === "addForm" ?
        <AddNewTableGamePage
        /> : pageLoader === "cards" ?
        <TableGamesPage/> : null
      }
    </>
  );
}

export default App;

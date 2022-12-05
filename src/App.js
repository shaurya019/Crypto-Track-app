import './App.css';
import { makeStyles } from "@material-ui/core";
import { Routes, Route } from "react-router-dom";
import Header from './components/Header'
import HomePage from './Pages/HomePage'
import Coinpage from './Pages/CoinPage'
// import { ClassNames } from '@emotion/react';

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {

const classes = useStyles();

  return (
    <>
     <div className={classes.App}>
    <Header />
    <Routes>
    <Route path='/' element={<HomePage />} exact />
    <Route path="/coin/:id" element={<Coinpage />} exact/>
    </Routes>
    </div>
    </>

  );
}

export default App;

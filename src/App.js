import React, {useState} from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css';
import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage'
import HomePage from './Pages/HomePage'
import PostCreatePage from './Pages/PostCreatePage'
import PostDetailPage from './Pages/PostDetailPage'
import Navbar from './Components/Navbar';
import PostListPage from './Pages/PostListPage';
import { UserContext } from './Contexts/UserContext';
import GlobalStyle from './Theme/GlobalStyles';


function App() {

  const[userData, setUserData] = useState(null)

  return (
    <>
  <GlobalStyle/>
    <UserContext.Provider value={{userData, setUserData}}>
      <div className="container">
        </div>
        <Switch>
          <Route exact path="/register">
            <RegisterPage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/">
          <Navbar/> 
            <HomePage />
          </Route>
          <Route exact path="/posts">
          <Navbar/> 
            <PostListPage />
          </Route>
          <Route exact path="/postcreate">
          <Navbar/> 
            <PostCreatePage />
          </Route>
          <Route exact path="/post/:id" exact component={PostDetailPage}>
          </Route>
        </Switch>
      </UserContext.Provider>
      </>
  );
}

export default App;

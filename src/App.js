import './App.scss';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Users from "./components/Users/Users";
import AllPosts from "./components/AllPosts/AllPosts";

function App() {
  return (
      <>
        <Header/>
          <div className='grid'>
              <div className='grid_nav'>
            <Nav/>
              </div>
              <div className='grid_content'>
                <Profile/>
                {/*<Users/>*/}
                {/*  <AllPosts/>*/}
              </div>
          </div>
      </>
  );
}

export default App;

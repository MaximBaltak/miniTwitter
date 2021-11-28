import './App.scss';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";

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
              </div>
          </div>
      </>
  );
}

export default App;

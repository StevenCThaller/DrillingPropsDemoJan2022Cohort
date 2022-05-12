import { useState } from 'react'
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';

const initialState = {
  firstName: "Cody",
  lastName: "Thaller",
  profilePic: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Twemoji_1f600.svg/800px-Twemoji_1f600.svg.png"
}

function App() {
  const [user, setUser] = useState(initialState)

  return (
    <div className="App">
      <NavBar user={user} />
      <HomePage user={ user } setUser={ setUser }/>
    </div>
  );
}

export default App;

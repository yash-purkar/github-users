import { useEffect, useState } from 'react';
import Loading from './Loading'
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getUsers() {
    try {
      let response = await fetch("https://api.github.com/users");
      let data = await response.json();
      setUsers(data)
      setLoading(false)
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  useEffect(() => {
    getUsers()
  }, []);

  if (loading == true) {
    return <Loading />
  }

  return (
    <>
      <h1>Github Users</h1>
      <div className="App">
        {
          users.map((currElem) => {
            return (
              <div className='container'>
                <div className='header'>
                  <img src={currElem.avatar_url} alt="" style={{ width: "100px", height: "100px" }} className="img" />
                  <h2>{currElem.login}</h2>
                </div>
                <div className='main'>
                  <div className='three-section-div'>
                    <div className='sections'>
                      <small>Followers</small>
                      <p>10000</p>
                    </div>

                    <div className='sections'>
                      <small>Following</small>
                      <p>2000</p>
                    </div>

                    <div className='sections'>
                      <small>Rating</small>
                      <p>8.9</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }

      </div>
    </>
  );
}

export default App;

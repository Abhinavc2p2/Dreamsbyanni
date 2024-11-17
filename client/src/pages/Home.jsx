import { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
    const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('/')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);
   <>
    <h1>{message}</h1>
    <h1>hiii</h1>
   </>
  }
  
  export default Home;
  
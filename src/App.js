import './App.css';
import List from './Components/List';
import {useEffect, useState} from  'react';
import axios from 'axios';
import Image from './Components/Image'

function App() {
  const [imgdata, setImgData] = useState([]);
  const [selectedImg, setSelectedImg] = useState(0)
  const token = 'UucdH6mDNhfNkDq-vVFmr_pSrbcuQvuMSrNsbaO4mFE';

  useEffect(() => {
    const getPhoto = async () => {
        const response = await axios.get(`https://api.unsplash.com/photos/?client_id=${token}`);
        setImgData(response.data);
    };
    getPhoto();
  }, [])

  console.log(imgdata);

  return (
    <div className="App">
     <List imgdata={imgdata} setSelectedImg={setSelectedImg} />
     <Image imgdata={imgdata} selectedImg={selectedImg}/>
    </div>
  );
}

export default App;

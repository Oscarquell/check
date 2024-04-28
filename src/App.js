import React, { useState } from 'react';
import './App.css';
import axios from "axios";
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';


const App = () => {
  const [API, setAPI] = useState('');
  const [apiResult, setApiResult] = useState(null);
  const [apiErrors, setApiErrors] = useState(null);

  const checkAPI = async () => {
    try {
      const response = await axios.get(`${API}`);
      setApiResult(response);
      setApiErrors(null);
    } catch (e) {
      setApiResult(null);
      setApiErrors(e);
      console.log(e)
    }
  };

  const jsonTheme = {
    background: 'red'
  }

  return (
    <div>
      <h1>Проверка API на CORS</h1>
      <div className='APIS'>
        <input className='input-text' type="text" placeholder='Введите Ваш API' onChange={(e) => setAPI(e.target.value)}/>
        <input className='input-button' type="button" value='Проверить' onClick={checkAPI}/>
      </div>
      <div className="API-result">
          <div>
            {apiResult && <JSONPretty  theme = { jsonTheme } id="json-pretty" data={apiResult}></JSONPretty>}
          </div>
          <div>
            {apiErrors && <JSONPretty style={{fontSize: "1.1em", overflow: 'hidden'}} id="json-pretty" data={apiErrors}></JSONPretty>}
          </div>
      </div>
    </div>
  );
};

export default App;

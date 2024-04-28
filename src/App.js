import React, { useState } from 'react';
import axios from "axios";
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';
import './App.css';
import CircularIndeterminate from "./components/loading/loading";

const App = () => {
  const [API, setAPI] = useState('');
  const [apiResult, setApiResult] = useState(null);
  const [apiErrors, setApiErrors] = useState(null);
  const [isLoading, setIsLoading] = useState(false)

  const checkAPI = async () => {
    setIsLoading(true)
    try {
      const response = await axios.get(`${API}`);
      setApiResult(response);
      setApiErrors(null);
    } catch (e) {
      setApiResult(null);
      setApiErrors(e);
    } finally {
      setIsLoading(false)
    }
  };

  const clear = () => {
    setApiResult(null)
    setApiErrors(null)
    setAPI('')
  }

  return (
    <div>
      <h1>Проверка API на CORS</h1>
      <div className='APIS'>
        <input
          className='input-text'
          type="text"
          placeholder='Введите Ваш API'
          value={API}
          onChange={(e) => setAPI(e.target.value)}
        />

        <input
          className='input-button'
          type="button"
          value='Проверить'
          onClick={checkAPI}
        />

        <input
          className='input-button'
          type="button"
          value='Очистить'
          onClick={clear}
        />

      </div>

      {isLoading ?
        <CircularIndeterminate/>
        :
        <div className="API-result">
          <div>
            {apiResult && <JSONPretty id="json-pretty" data={apiResult}></JSONPretty>}
          </div>
          <div>
            {apiErrors && <JSONPretty id="json-pretty" data={apiErrors}></JSONPretty>}
          </div>
        </div>
      }

    </div>
  );
};

export default App;

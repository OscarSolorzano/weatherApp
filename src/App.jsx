import './App.css'
import Weather from './components/Weather'
import useFetchWeather from './hooks/useFetchWeather'
import * as ReactBootStrap from 'react-bootstrap';


function App() {

  const {
    loading: loading,
  } = useFetchWeather();

  return (
    <div>
      {loading ?
        <div className='flex'>
          <ReactBootStrap.Spinner 
          animation='border'
          style={{ width: "10rem", height: "10rem" }} />
        </div>
         :
        <Weather />}
    </div>
  )
}

export default App

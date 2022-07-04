import './App.css'
import Weather from './components/Weather'
import useFetchWeather from './hooks/useFetchWeather'
import * as ReactBootStrap from 'react-bootstrap';


function App() {

  const {
    loading: loading,
} = useFetchWeather();

console.log(loading)
  return (
    <div className='flex'>
      {loading? <Weather/> : <ReactBootStrap.Spinner animation='border' />}
    </div>
  )
}

export default App

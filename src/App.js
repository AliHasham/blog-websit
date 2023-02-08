import './App.css';
import '../src/style/animation.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Component from './component/Component';
import Header from './auth/content/header';
// import Header from './com/header';
// import Midel from './com/midel';
// import Header from './auth/content/header';
// import { BrowserRouter } from 'react-router-dom';
function App() {

  return (
    <>
      {/* <Header/>
 <Midel/> */}
      <Header />
      <Component />

    </>
  );
}

export default App;

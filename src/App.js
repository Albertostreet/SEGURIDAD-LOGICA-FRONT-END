import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Login from './views/login';
import signUp from './views/signUp';

function App() {
  return (
    <BrowserRouter>
        <Route exact path="/" component={Login} />
        <Route exact path="/signUp" component={signUp}/>
    </BrowserRouter>
  );
}

export default App;

import {Routes, Route, Link} from 'react-router-dom'
import './App.css';
import Dashboard from './Dashboard';
import Chats from './Chats'
import Cards from './Cards'
import Widgits from './Widgits'
import Components from './Components'
import Pages from './Pages'



function App() {
  return (
    <div className="App">
      <Routes>
            <Route path='/dashboard' element={<Dashboard/>}>DASHBOARD</Route>
            <Route path='/chats' element={<Chats/>}>CHATS</Route>
            <Route path='/cards' element={<Cards/>}>CARDS</Route>
            <Route path='/widgits' element={<Widgits/>}>WIDGITS</Route>
            <Route path='/components' element={<Components/>}>COMPONENTS</Route>
            <Route path='/pages' element={<Pages/>}>PAGES</Route>
           </Routes>
    </div>
  );
}

export default App;

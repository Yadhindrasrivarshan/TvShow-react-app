import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'

import Aboutpage from './pages/Aboutpage'
import Singlepage from './pages/Singlepage'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
const App=()=>{
  return (<Router>
    <Navbar/>
    <div className="container">
      <Switch>
           <Route exact path='/' component={Homepage}/>
           <Route exact path="/about" component={Aboutpage}/>
           <Route  path="/singleshow/:id" component={Singlepage}/>
      </Switch>

    </div>

  </Router>
  )
}

export default App;

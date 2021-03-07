import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Slidebar from '../components/Slidebar/Slidebar'
import Main from '../components/Main'
import AddProduct from '../components/AddProduct'
import AddLocation from '../components/AddLocation'
import AddProductMovement from '../components/AddProductMovement'
import ViewProductMovement from '../components/ViewProductMovement'

function App() {
  return (
    <Router>
      <div className="app">
          <Slidebar />
          <div className="app__body">
            <Switch>
              <Redirect from="/" to="/all_products" exact/>
              <Route path="/all_products" component={Main} />
              <Route path="/add_product" component={AddProduct} exact/>
              <Route path="/add_location" component={AddLocation} exact/>
              <Route path="/add_product_movement" component={AddProductMovement} exact/>
              <Route path="/view_product_movements" component={ViewProductMovement} exact/>
            </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;

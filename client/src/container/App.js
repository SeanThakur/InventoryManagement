import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import {Provider} from "react-redux";
import store from "../store/store"
import Slidebar from '../components/Slidebar/Slidebar'
import Main from '../components/Main'
import AddProduct from '../components/AddProduct'
import AddLocation from '../components/AddLocation'
import AddProductMovement from '../components/AddProductMovement'
import ViewProductMovement from '../components/ViewProductMovement'
import EditProduct from '../components/EditProduct'

function App() {
  return (
    <Provider store={store}>
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
                <Route path="/edit_product/:id" component={EditProduct} exact/>
              </Switch>
            </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

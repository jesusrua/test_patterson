import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//PROVIDER
import {CartProvider} from './CartContext';

//COMPONENTS
import Showcase from './Components/Showcase/Showcase';
import Cart from './Components/Cart/Cart';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (


    <Router>

        <CartProvider>
          <div className="App">
            <Navbar/>
            <Switch>
              <Route path='/' exact component={Showcase} />
              <Route path='/carrito' exact component={Cart}/>            
            </Switch>
          </div>
        </CartProvider>         
     
    </Router>

  );
}

export default App;

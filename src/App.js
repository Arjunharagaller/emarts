import Home from "./Component/Home";
import Navbars from "./Component/Navbars";
import Products from "./Component/Products";
import Product from "./Component/Product";
import {Routes,Route} from 'react-router-dom';
import Cart from "./Component/Cart";

function App() {
  return (
    <div>
      <Navbars></Navbars>
      <Routes>
        <Route  path="/" Component={Home}></Route>
        <Route  path="/products" Component={Products}></Route>
        <Route  path="/products/:id" Component={Product}></Route>
        <Route  path="/cart" Component={Cart}></Route>

      </Routes>
    </div>
  );
}

export default App;

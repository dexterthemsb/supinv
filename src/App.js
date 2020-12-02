import { Link, Route, Switch } from "react-router-dom";

import Inventory from "./pages/inventory";
import Suppliers from "./pages/suppliers";

const App = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="container mx-auto min-h-full">
        <Switch>
          <Route exact path="/">
            <div className="px-8 py-16 min-h-full flex flex-col items-center justify-center">
              <p className="text-4xl mb-2 font-bold text-gray-900">Home</p>
              <Link className="hover:text-yellow-700 text-yellow-600" to="/suppliers">
                Check all the Suppliers
              </Link>
            </div>
          </Route>
          <Route exact path="/suppliers">
            <Suppliers />
          </Route>
          <Route exact path="/supplier/:supplierID">
            <Inventory />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;

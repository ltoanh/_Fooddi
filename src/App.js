import { useState } from "react";

//=================== router ============================
import { PATHS } from "./routes/paths";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthenticatedRoute from "./routes/router/AuthenticatedRoute";
import ProtectedRoute from "./routes/router/ProtectedRoute";

//================ components ===========================
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//=============== containers ============================
import Homepage from './containers/Homepage';
import Shop from './containers/Shop';

function App() {
  // ============ state =================
  const [isAuth, setIsAuth] = useState(false);

  // ============ router ================
  

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route isAuth={isAuth} exact path={PATHS.HOMEPAGE} component={Homepage} />
          <Route isAuth={isAuth} path={PATHS.SHOP} component={Shop} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

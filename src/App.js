import { Routes, Route } from "react-router-dom";
import Dashboad from "./components/Dashboad";
import StaticNav from "./components/StaticNav";
import LightNavigation from "./components/LightNavigation";
import Login from "./Authentication/Login";
import Register from "./Authentication/Register";
import Password from "./Authentication/Password";
import Error401 from "./Error/Error401";
import Error404 from "./Error/Error404";
import Error505 from "./Error/Error505";
import Chart from "./components/Charts"
import Tables from "./components/Tables"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboad />} />
        <Route path="/static-Navigation" element={<StaticNav />} />
        <Route path="/static-navigation-light" element={<LightNavigation />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/password" element={<Password />} />
        <Route path="/401" element={<Error401/>}/>
        <Route path="/404" element={<Error404/>}/>
        <Route path="/500" element={<Error505/>}/>
        <Route path="/chart" element={<Chart/>}/>
        <Route path="/tables" element={<Tables/>}/>
      </Routes>
    </>
  );
}

export default App;

import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import PrivateRoutes from "./routes/PrivateRoutes";

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <PrivateRoutes />
      </BrowserRouter>
    </>
  );
};

export default App;

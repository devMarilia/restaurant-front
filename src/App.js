import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import { GlobalStyled } from "./styled/globalStyled";

function App() {
  return (
    <div>
      <GlobalStyled/>
      <Navbar/>
      <Banner/>
    </div>
  );
}

export default App;

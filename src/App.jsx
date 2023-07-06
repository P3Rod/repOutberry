import Card from "./components/Card"
import About from "./components/About"
import Carousel from "./components/Carousel"
import Rodape from "./components/Rodape"
import Menu from "./components/Menu"
import Cardapio from "./components/Cardapio"


const App = () => {


  return (
    <div>
      <Card/>
      <Menu/>
      <Cardapio/>
      <About/>
      <Carousel/>
      <Rodape/>
    </div>
  );
};

export default App;
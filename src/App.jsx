import Card from "./components/Card"
import Carousel from "./components/Carousel"
import {motion} from 'framer-motion'



const App = () => {


  return (
    <div>
      <Card/>
      <h1>Meu Carrossel de Fotos</h1>
      <Carousel />
    </div>
  );
};

export default App;
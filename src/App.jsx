import Card from "./components/Card"
import About from "./components/About"
import Carousel from "./components/Carousel"
import {motion} from 'framer-motion'
import Rodape from "./components/Rodape"
 


const App = () => {


  return (
    <div>
      <Card/>
      <About/>
      <Carousel/>
      <Rodape/>
    </div>
  );
};

export default App;
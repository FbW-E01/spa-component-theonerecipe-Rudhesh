import Ingredients from "./ingredients-list/Ingrediensts";
import RecipeTitle from "./Recipe-page/RecipeTitle";
import Step from "./Step/Step"
import Image from "./image/1.webp"
import "./App.css"
function App() {
  return <div className="App">
    <RecipeTitle/>
    <Ingredients/>
    <Step/>
 
  <div>
    <img src={Image} alt="Image"/></div>    


  </div>;
}

export default App;

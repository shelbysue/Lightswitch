
import './App.css';
import { Counter } from './Counter';
import Switch from './Switch';
import { PetInfo } from './PetInfo'; 
import { HeaderComponent } from './header';
import { VotesComponent } from './votes';
import { AdDesigner } from './adDesigner';

function App() {
  return (
    <div className="App">
      <Switch></Switch>
      <Counter></Counter>
      <PetInfo></PetInfo>
      <HeaderComponent></HeaderComponent>
      <VotesComponent></VotesComponent>
      <AdDesigner></AdDesigner>
    </div>
  );
}

export default App;

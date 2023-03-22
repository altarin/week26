import './App.css';
import Hero from './components/hero';
import heroes from './utils/arrHeroes';

function App() {
  return (
    <div className="App">
      {
        heroes.map((hero) =>
          <Hero name={hero.name} universe={hero.universe} alterego={hero.alterego} activity={hero.activity} superpower={hero.superpower} img={hero.img} alt={hero.alt}></Hero>
        )
      }
    </div>
  );
}

export default App;
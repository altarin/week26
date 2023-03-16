import logo from './logo.svg';
import './App.css';
import Hero from './components/hero';

function App() {
  return (
    <div className="App">
      <Hero name="Железный человек" universe="Marvel" alterego="Тони Старк" activity="Гений" superpower="Высокий уровень интеллекта" img="ironman.png"></Hero>
      <Hero name="Халк" universe="Marvel" alterego="Брюс Беннер" activity="Борец за справедливость" superpower="Cверхчеловеческая сила" img="halk.jpg"></Hero>
      <Hero name="Черная вдова" universe="Marvel" alterego="Наташа Романофф" activity="Шпионка" superpower="Пик человеческого физического потенциала" img="blackwidow.jpg"></Hero>
    </div>
  );
}

export default App;
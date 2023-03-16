import './hero.css';

function Hero(props) {
    return (
        <div className="hero-card">
            <div className="hero-name">{props.name}</div>
            <div className="hero-universe">Вселенная: {props.universe}</div>
            <div className="hero-alterego">Альтер эго: {props.alterego}</div>
            <div className="hero-activity">Деятельность: {props.activity}</div>
            <div className="hero-superpower">Суперсила: {props.superpower}</div>
            <img src={props.img}></img>
        </div >
    );
}

export default Hero;
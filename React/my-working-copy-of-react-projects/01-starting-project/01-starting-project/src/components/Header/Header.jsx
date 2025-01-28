import reactImage from '../../assets/react-core-concepts.png';
import './Header.css';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
    const randomNum = genRandomInt(2);
    const reactDescription = reactDescriptions[randomNum];
    return (
        <header>
            <img src={reactImage} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
                {reactDescription} React concepts you will need for almost any app you are going to build!
            </p>
        </header>
    );
}
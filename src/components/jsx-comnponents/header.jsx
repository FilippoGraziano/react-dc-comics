
import '../css-comnponents/header.css'

const navLinks = [
    { id: 1, name: `Charset`, link: `#`, active: false,},
    { id: 2, name: `Comics`, link: `#`, active: true,},
    { id: 3, name: `Movies`, link: `#`, active: false,},
    { id: 4, name: `TV`, link: `#`, active: false,},
    { id: 5, name: `Games`, link: `#`, active: false,},
    { id: 6, name: `Collectibles`, link: `#`, active: false,},
    { id: 7, name: `Videos`, link: `#`, active: false,},
    { id: 8, name: `Fans`, link: `#`, active: false,},
    { id: 9, name: `News`, link: `#`, active: false,},
    { id: 10, name: `Shop`, link: `#`, active: false,}
];

const Header = () => (
    <header>

        <div className="container">

            <img src="img/dc-logo.png" alt="logo" />

            <nav>

                <ul>

                    {navLinks.map(element => (

                        <li key={element.id} className={element.active ? `active` : false}>

                            <a href={element.link}>{element.name}</a>

                        </li>

                    ))}

                </ul>

            </nav>

        </div>
        
    </header>
);

export default Header

import '../css-comnponents/header.css'
import { navLinksHeader } from '../links';

const Header = () => (
    <header>

        <div className="container">

            <img src="img/dc-logo.png" alt="logo" />

            <nav>

                <ul>

                    {navLinksHeader.map(element => (

                        <li key={element.id} className={element.active ? `active` : undefined}>

                            <a href={element.link}>{element.name}</a>

                        </li>

                    ))}

                </ul>

            </nav>

        </div>

    </header>
);

export default Header

import '../css-comnponents/header.css'

const Header = () => (
    <header>

        <div className="container">

            <img src="img/dc-logo.png" alt="logo" />
            <nav>
                <ul>
                    <li>Charset</li>
                    <li className='active'>Comics</li>
                    <li>Movies</li>
                    <li>TV</li>
                    <li>Games</li>
                    <li>Collectibles</li>
                    <li>Videos</li>
                    <li>Fans</li>
                    <li>News</li>
                    <li>Shop</li>
                </ul>
            </nav>
            
        </div>
    </header>
);

export default Header
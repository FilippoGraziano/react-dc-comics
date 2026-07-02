
import '../css-comnponents/header.css'

const Header = () => (
    <header>

        <div className="container">

            <img src="img/dc-logo.png" alt="logo" />

            <nav>

                <ul>

                    <li>
                        <a href="#">Charset</a>
                    </li>

                    <li className='active'>
                        <a href="#">Comics</a>
                    </li>

                    <li>
                        <a href="#">Movies</a>
                    </li>

                    <li>
                        <a href="#">TV</a>
                    </li>

                    <li>
                        <a href="#">Games</a>
                    </li>

                    <li>
                        <a href="#">Collectibles</a>
                    </li>

                    <li>
                        <a href="#">Videos</a>
                    </li>

                    <li>
                        <a href="#">Fans</a>
                    </li>

                    <li>
                        <a href="#">News</a>
                    </li>
                    
                    <li>
                        <a href="#">Shop</a>
                    </li>

                </ul>

            </nav>

        </div>
    </header>
);

export default Header
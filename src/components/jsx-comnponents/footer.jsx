
import '../css-comnponents/footer.css'
import { informationLinks, navLinksFooter, socialLinks } from '../links';

const Footer = () => (
    <footer>

        <section id='navigation-link'>

            <div className="container">

                <nav>

                    <ul>

                        {navLinksFooter.map(el => (

                            <li key={el.id}>

                                <img src={el.img} alt={el.name} />
                                <a href={el.link}>{el.name}</a>

                            </li>

                        ))}

                    </ul>

                </nav>

            </div>

        </section>

        <section id='information'>

            <div className="container">

                <div id="link">

                    {informationLinks.map(el => (
                        <ul key={el.id} id={el.cssId}>
                            <li>
                                <h2>{el.title}</h2>
                            </li>
                            {el.element.map(el2 => (
                                <li key={el2.id}>
                                    <a href={el2.link}>{el2.name}</a>
                                </li>
                            ))}
                        </ul>
                    ))}

                </div>

            </div>

        </section>

        <section id='social'>

            <div className="container">

                <button>Sing-up Now!</button>

                <nav>

                    <ul>

                        <li>
                            <p>Follow US</p>
                        </li>

                        {socialLinks.map(el => (

                            <li key={el.id}>

                                <a href={el.link}>
                                    <img src={el.img} alt={el.name} />
                                </a>

                            </li>

                        ))}

                    </ul>

                </nav>

            </div>

        </section>

    </footer>
);

export default Footer
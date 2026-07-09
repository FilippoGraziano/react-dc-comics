
import '../css-comnponents/main.css'

const Main = (props) => (
    <main>

        <div id="jumbo"></div>

        <div className="container">

            <span>Current series</span>

            <section>

                {props.comics.map(element => (

                    <div key={element.id} className="card">

                        <div className='comics-cover' style={{backgroundImage: `url(${element.thumb})`}}></div>

                        <p>{element.series}</p>

                    </div>

                ))}

            </section>

            <button>Load more</button>

        </div>
        
    </main>
);

export default Main
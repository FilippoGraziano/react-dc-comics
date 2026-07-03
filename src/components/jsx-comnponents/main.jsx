
import '../css-comnponents/main.css'
import comics from '../comics';

const comicsCopy = [...comics];

const wrongComicCover = comicsCopy.find(element => (element.series === `Batman`))
wrongComicCover.thumb = comicsCopy.find(element => (element.series === `Batman Beyond`)).thumb

const Main = () => (
    <main>

        <div id="jumbo"></div>

        <div className="container">

            <span>Current series</span>

            <section>

                {comicsCopy.map(element => (

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

import Footer from './components/jsx-comnponents/footer'
import Header from './components/jsx-comnponents/header'
import Main from './components/jsx-comnponents/main'
import './App.css'


import comics from './components/comics';
const comicsCopy = [...comics];

const wrongComicCover = comicsCopy.find(element => (element.series === `Batman`))
wrongComicCover.thumb = comicsCopy.find(element => (element.series === `Batman Beyond`)).thumb

function App() {
  return (
    <>
      <Header />
      <Main comics={comicsCopy}/>
      <Footer />
    </>
  )
}

export default App

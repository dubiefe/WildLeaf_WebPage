import './App.css'

import Nav from "./nav_component/nav.jsx";
import Presentation from './presentation_component/presentation.jsx';
import Details from './details_component/details.jsx';
import Video from './video_component/video.jsx';
import References from './references_component/references.jsx';
import Footer from "./footer_component/footer.jsx";

function App() {

  return (
    <>
      <Nav/>
      <Presentation/>
      <Details/>
      <Video/>
      <References/>
      <Footer/>
    </>
  )
}

export default App

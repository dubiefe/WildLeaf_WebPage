import wildleaf_logo from "../assets/wildleaf_logo.png"
import './nav.css'

function Nav() {

  return (
    <>
      <div id="nav_container">
        <img src={wildleaf_logo} alt="wildleaf_logo" />
        <button id="button_application">Go to the app &#x2192;</button>
      </div>
    </>
  )
}

export default Nav
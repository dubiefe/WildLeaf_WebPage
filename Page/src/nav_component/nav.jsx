import wildleaf_logo from "../assets/wildleaf_logo.png"
import './nav.css'

function Nav() {

  return (
    <>
      <div id="nav_container">
        <img src={wildleaf_logo} alt="wildleaf_logo" />
        <button id="button_application"><a href="http://52.203.48.52" target="_blank">Go to the app &#x2192;</a></button>
      </div>
    </>
  )
}

export default Nav
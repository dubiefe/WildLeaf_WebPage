import './details.css'
import problem_img from "../assets/problem.png"
import what_img from "../assets/what.png"
import difference_img from "../assets/difference.png"

function Details() {

  return (
    <>
      <div id="details_container">
        <div id='problem_container'>
            <h2>What is the problem faced?</h2>
            <img src={problem_img} alt="problem" />
        </div>
        <div id='what_container'>
            <h2>What is WildLeaf?</h2>
            <p>WildLeaf is an interractive map of all endangered or vulnerable plants of Spain, it offers the possibility to do:</p>
            <img src={what_img} alt="what" />
        </div>
        <div id='why_container'>
            <h2>Why are we making the difference?</h2>
            <img src={difference_img} alt="difference" />
        </div>
      </div>
    </>
  )
}

export default Details
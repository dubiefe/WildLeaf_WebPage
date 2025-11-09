import './details.css'

function Details() {

  return (
    <>
      <div id="details_container">
        <div id='problem_container'>
            <h2>What is the problem faced?</h2>
            <div>
                <div>
                    <p>Most people only know</p>
                    <h3>300</h3>
                    <p>of all plants that exists</p>
                    <p>over</p>
                    <h3>350.000</h3>
                </div>
                <div>
                    <p>Today in Spain we count</p>
                    <h3>132</h3>
                    <p>endangered plants</p>
                    <h3>50</h3>
                    <p>vulnerable plants</p>
                </div>
            </div>
        </div>
        <div id='what_container'>
            <h2>What is WildLeaf?</h2>
            <p>WildLeaf is an interractive map of all endangered or vulnerable plants of Spain.</p>
            <p>With WildLeaf you can:</p>
            <ul>
                <li>Search plants according to the region</li>
                <li>Learn what are their roles in the environment</li>
                <li>Learn how to protect them</li>
                <li>Display the cleaning you made to save the envirnment</li>
            </ul>
        </div>
        <div id='why_container'>
            <h2>Why are we making the difference?</h2>
            <div>
                <div>
                    <p>Reliable data</p>
                </div>
                <div>
                    <p>Simplify Information</p>
                </div>
                <div>
                    <p>Accessible to everyone</p>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Details
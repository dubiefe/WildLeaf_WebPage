import './details.css'

function Details() {

  return (
    <>
      <div id="details_container">
        <div id='problem_container'>
            <h2>What is the problem faced?</h2>
            <div class="first_container">
                <div class="content_container">
                    <p>Most people only know</p>
                    <h3>300</h3>
                    <p>of all plants that exists</p>
                    <p>over</p>
                    <h3>350.000</h3>
                </div>
                <div class="content_container">
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
            <p>WildLeaf is an interractive map of all endangered or vulnerable plants of Spain, it offers the possibility to do:</p>
            <div class="first_container">
                <div class="second_container">
                    <div class="content_container">
                        <p>Search plants according to the region</p>
                    </div>
                    <div class="content_container">
                        <p>Learn what are their roles in the environment</p>
                    </div>
                </div>
                <div class="second_container">
                    <div class="content_container">
                        <p>Learn how to protect them</p>
                    </div>
                    <div class="content_container">
                        <p>Display the cleaning you made to save the envirnment</p>
                    </div>
                </div>
            </div>
        </div>
        <div id='why_container'>
            <h2>Why are we making the difference?</h2>
            <div class="first_container">
                <div class="content_container">
                    <p>Reliable data</p>
                </div>
                <div class="content_container">
                    <p>Simplified Information</p>
                </div>
                <div class="content_container">
                    <p>Accessible to everyone</p>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Details
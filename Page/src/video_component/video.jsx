import './video.css'

function Video() {

  return (
    <>
      <div id="video_container">
          <iframe width="560" height="315"
            src="https://www.youtube.com/embed/aas3PvUhaa8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen>
        </iframe>
      </div>
    </>
  )
}

export default Video
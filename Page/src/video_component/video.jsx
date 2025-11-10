import './video.css'
import wildleaf_demo from "../assets/wildleaf_demo.mp4"

function Video() {

  return (
    <>
      <div id="video_container">
        <video width="320" height="240" controls>
            <source src={wildleaf_demo} type="video/mp4" />
        </video>
      </div>
    </>
  )
}

export default Video
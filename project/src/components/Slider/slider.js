import './slider.css'
import img2 from '../../slider/5.jpg'

const Slider=()=>{
    return(
    <div className="mainslider">
        <div className="heading">
            <h1>beautifull Places</h1>

            <div className="btn">
            <button>GET STARTED</button>
            </div>
        </div>
        <div className="img2">
            <img src={img2}/>
            
        </div>
    </div>
    )
}


export default Slider;
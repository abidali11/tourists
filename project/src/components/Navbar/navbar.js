import'./navbar.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAlignJustify} from '@fortawesome/free-solid-svg-icons'
import img1 from '../../logo/1.jpg'
import Heading from '../Heading'
const Navbar=()=>{
    
    return(  
    <div className='navbar_slider'>

    <div className="lg-logo">
    <img src={img1} />
        <h2>Tourist Information App</h2>
    </div>

<div className="gallery">
  <Heading />
</div>

<div className='icons'>
    <h2>Signin</h2>
    <i><FontAwesomeIcon icon={faAlignJustify} /></i>
</div>
    </div>
    )
}

export default Navbar;

import img3 from '../../ourteamimg/1.jpg'
import img4 from '../../ourteamimg/3.jpg'
import './ourteam.css'
import Button from '../Button';
// import headteam from '../Ourteam/headteam'

const Ourteam=()=>{
    return(
        
        <>
    <div className="team">
        <h1>Gilgit adventure is Here</h1>
        <p>Now there is a way to explor our beautifull Places</p>
        <div className="img1">
        <img src={img3} />
        <img src={img4}/>
         
        </div>
        <headteam/>
    </div>
    <div className="main">
     <Button name='Explore It' styles='main_button'/>
     <Button name='Submit' styles='submit_button'/>
     <Button name='Explore It' styles='main_button1'/>
     <Button name='Learn more' styles='learnmore'/>
    </div> 
    </>
    )
}


export default Ourteam;
import './Landing.css'
import bg from './assets/bg.png'

function Landing(){
   return(
    <>
    <div className='landing_page'>
        <div className='landing-content'>
            <h1>Nanotechnology-Based 
              <br /><span>STEAM </span>Education
              <br />for School Students</h1>
            <h4>
                Empowering students from <span>Grades 6-12</span> with
                <br />innovation, problem-solving, and <span>NEP 2020</span>
                <br />aligned curriculum to prepare them for the 
                <br />future of science and technology
            </h4>
            <div>
                <button className='explore'>Explore Programs</button>
                <button className='enroll'>Enroll Now</button>
            </div>
        </div>
        <div >
            <img src={bg} alt="STEAM-Learning" className='steam-img' />
        </div>
    </div>
    </>
   )
}
export default Landing
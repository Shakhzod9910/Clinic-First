import './Home.scss'
import { Link } from 'react-router-dom'
import React,{useEffect,useState} from 'react'
function Home() {
   
    const [ clinics, setClinics ] = useState([])
    

    useEffect(() => {

        fetch('http://192.168.1.9:4000/')
        .then(data => data.json())
        .then(m => setClinics(m))

    }, [])

    return (
        
            <section className="Home">
                <div className="navbare">
                    <div className="container">
                        <div className="nav">
                            <h1>Clinics</h1>
                            <ul className="navlist">
                                <Link to="/"><li className="navListItems">My Orders</li></Link>
                                <Link to="/login"><li className="navListItems">Sign In</li></Link>
                                <Link to="/register"><li className="navListItems">Sign Up</li></Link>
                            </ul>
                        </div>
                    </div>
                </div>
                <h1 className='header'>MEDICAL HELP CENTERS</h1>
                <div className="clinicLists container">
                    <ul>
                        {clinics && clinics.map((item) =>(
                        <Link to="/register" key={item.clinic_id}><li className="clinicListitems" >
                            <img src={item.clinic_img} alt="clinicfoto" />
                            <h2 className='clinicName'>{item.clinic_name}</h2>
                            <span className='adress'>{item.clinic_lacation}</span>
                            <span className='telNumber'>{item.clinic_tel}</span>
                        </li></Link>
                        ))}                        
                    </ul>
                </div>
            </section>
    )
}

export default Home
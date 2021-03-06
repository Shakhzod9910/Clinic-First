import './Orders.scss'
import { Link } from "react-router-dom"
import React,{useEffect,useState} from 'react'

function Orders() {

    const [ orders, setOrders ] = useState([])
    

    useEffect(() => {

        fetch('http://192.168.1.9:4000/superadmin/orders')
        .then(data => data.json())
        .then(m => setOrders(m))

    }, []) 

    const deleteOrder = (evt)=>{
        let orderId = (evt.target.getAttribute('data'));
        let objects = {
            order_id: orderId
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(objects)
        };
        fetch('http://192.168.1.9:4000/superadmin/order/delete', requestOptions)
        .then(data => data.json())
        .then(m => {
            if(m == 'deleted'){
                evt.target.textContent = "Removed"
            }
            
        })
    }

    function normalizeDate(time) {
        var year = new Date(time).getFullYear();
        var month = String(new Date(time).getMonth() + 1).padStart(2, '0');
        var day = String(new Date(time).getDate()).padStart(2, '0');
        var hour = String(new Date(time).getHours()).padStart(2, '0')
        var minut = String(new Date(time).getMinutes()).padStart(2, '0')
    
        return day + '.' + month + '.' + year  +  ' ' + hour + ':' + minut ;
    }


    return (
        <>
            <section className="orders">
                <div className="navbar">
                    <div className="container">
                        <h1>SUPER ADMIN</h1>
                        <Link to="/superadmin"><span>Users</span></Link>
                    </div>
                </div>
                <div className="orderSection container">
                    <h1>List of orders</h1>
                    <ul className="orderslist">
                    {orders && orders.map((row)=>(
                      
                      <li className="ordersListItem" key={row.order_id}>
                      <h2>{row.clinic_name}</h2>
                      <span className="service">Secvice :<span className="serviceName">{row.service_title}</span></span>
                      <div className="Doctor">
                          <span className="doctorName">Doctor's name : <span>{row.doctor_name}</span> </span>
                      </div>
                      <div className="patientInfo">
                          <span className="userInfo">Patient name : <span>{row.user_name}</span>
                          </span>
                          <span className="tel"> <span>Tel number :</span>{row.user_tel}</span>
                          <span className="userEmail"> <span>Email :</span>{row.user_gmail}</span>
                      </div>
                      <span className="time">Order time : <span>{normalizeDate(row.order_time)}</span> </span>
                      <button className="deletebtn"  data={row.order_id} onClick={deleteOrder}>Remove this patient</button>
                     
                     
                  </li>
                    ))}
                      
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Orders
import './Superadmin.scss'
import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'


function Superadmin() {

    const [ users, setUsers ] = useState([])
    

    useEffect(() => {

        fetch('http://192.168.1.9:4000/superadmin/users')
        .then(data => data.json())
        .then(m => setUsers(m))

    }, []) 


    const deleteUser = (evt)=>{
        let userId = (evt.target.getAttribute('data'));
        let objects = {
            user_id: userId
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(objects)
        };
        fetch('http://192.168.1.9:4000/superadmin/user/delete', requestOptions)
        .then(data => data.json())
        .then(m => {
            console.log(m)
            evt.target.textContent = "Deleted"
        })
    }


    let i =1
    return (
        <>
            <section className="superadmin">
                <div className="navbar">
                    <div className="container">
                        <h1>SUPER ADMIN</h1>
                        <Link to="/orders"><span>Orders</span></Link>
                    </div>
                </div>
                <div className="containeri">
                    <h1>List of users</h1>
                    <li className="list-items  default-names">
                        <span className="list-number">No</span>
                        <span className="name">Name</span>
                        <span className="id">Tel number</span>
                        <span className="salery">Email</span>
                        <span className="isAdmin">Role</span>
                    </li>
                    <ul className="list">
                    {users && users.map((row)=>(
                        <li className="list-items" key={row.user_id}>
                        <span className="count">{i++}</span>
                        <span className="usName">{row.user_name}</span>
                        <span className="id">{row.user_tel}</span>
                        <span className="forbtn"><span className="usEmail">{row.user_gmail}</span> <button className="btndelete" data={row.user_id} onClick={deleteUser}>Delete</button></span>
                        <span className="role">{row.is_admin}</span>
                    </li>   
                    ))}
                    </ul>
                  
                </div>

            </section>
        </>
    )

}

export default Superadmin
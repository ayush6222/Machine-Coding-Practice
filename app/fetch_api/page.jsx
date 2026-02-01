"use client"
import {useState, useEffect} from 'react';
import Button from "../components/button"
import "./styles.css"

export default function FetchAPI(){
    const [loading, setLoading] = useState(false)
    const [list, setList] = useState([]);

    useEffect(()=>{
        fetchUsers()
    },[])

    const fetchUsers = async() =>{
        try {
            setLoading(true)
            const res = await fetch("https://dummyjson.com/users");
            const data = await res.json();
            setList(data.users)

        }
        catch{
            console.log(err)
        }
        finally{
            setLoading(false)
        }
    }
    return (
        <div>
            <Button url="https://github.com/ayush6222/Machine-Coding-Practice/blob/main/app/fetch_api/page.jsx"/> <p>Fetch API</p>
            {loading && <p>Loading...</p>}
            <table>
                <tr>
                    <th>Name</th>
                    <th>Age, Gender</th>
                    <th>Mail Id</th>
                </tr>
        
            { list.length>0 && !loading && 
                list.map((userData)=> {
                    return (
                       <tr key={userData.id}>
                        <td>{`${userData.firstName} ${userData.lastName}`}</td>
                        <td>{`${userData.age}, ${userData.gender}`}</td>
                        <td>{userData.email}</td>
                       </tr>
                    )
                })
            }
                </table>
        
        </div>
    )
}
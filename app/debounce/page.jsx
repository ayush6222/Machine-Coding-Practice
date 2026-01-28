"use client"

import { useEffect, useState } from "react"
import Button from "../components/button"
import "./styles.css"
export default function Debounce() {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false)
    const [filteredData, setFilteredData] = useState([])
    const [searchText, setSearch] = useState("");


    useEffect(() => {
        fetchUsers();
    }, [])

    useEffect(() => {
        const timer = setTimeout(() => {
            const search = searchText.toLowerCase();
            const data = list.filter((item) => {
                return (
                    item.firstName.toLowerCase().includes(search) || item.lastName.toLowerCase().includes(search)
                )
            }

            )
            setFilteredData(data)
        }, 500)

        return (() => clearTimeout(timer))

    }, [searchText, list])

    const fetchUsers = async () => {
        try {
            setLoading(true)
            const res = await fetch("https://dummyjson.com/users");
            const data = await res.json();
            setList(data.users)
            setFilteredData(data.users)

        }
        catch {
            console.log(err)
        }
        finally {
            setLoading(false)
        }
    }

    return (
        <>
            <h1>Debounce</h1>
            <Button url="https://github.com/ayush6222/Machine-Coding-Practice/blob/main/app/debounce/page.jsx" />
            <input type="text" onChange={(e) => setSearch(e.target.value)} />
            {loading && <h2>Loading...</h2>}
            {
                !loading && filteredData.length > 0 ?
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                        </tr>
                        {filteredData.map((userData) => {
                            return (

                                <tr>
                                    <td>{`${userData.firstName} ${userData.lastName}`}</td>
                                    <td>{userData.age}</td>
                                </tr>
                            )
                        })}
                    </table> :
                    <p>Not Found</p>
            }
        </>
    )
}
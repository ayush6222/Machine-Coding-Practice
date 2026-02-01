"use client";
import { useEffect, useState, useRef } from "react";
import Button from "../components/button";
import "./styles.css"
export default function Throttle() {
    const [list, setList] = useState([]);
    const [filteredList, setFilterList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchText, setSearchText] = useState("");

    const lastRunRef = useRef(0);
    const throttleTime = 1500;

    useEffect(() => {
        fetchUser();
    }, []);

    useEffect(() => {
        if (!searchText) {
            setFilterList(list);
            return;
        }

        const now = Date.now();

        if (now - lastRunRef.current < throttleTime) return;

        lastRunRef.current = now;

        const query = searchText.toLowerCase();

        const data = list.filter((item) =>
            item.firstName.toLowerCase().includes(query) ||
            item.lastName.toLowerCase().includes(query)
        );

        setFilterList(data);
    }, [searchText, list]);

    const fetchUser = async () => {
        try {
            setLoading(true);
            const res = await fetch("https://dummyjson.com/users");
            const data = await res.json();
            setList(data.users);
            setFilterList(data.users);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <h1>Throttle</h1>
            <br/>
            <Button url="https://github.com/ayush6222/Machine-Coding-Practice/blob/main/app/throttle/page.jsx" />
            <br/>
            <input
                type="text"
                placeholder="Search user"
                onChange={(e) => setSearchText(e.target.value)}
            />

            {loading && <p>Loading...</p>}

            {!loading && filteredList.length > 0 && (
                <table border="1">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredList.map((user) => (
                            <tr key={user.id}>
                                <td>{user.firstName} {user.lastName}</td>
                                <td>{user.age}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
}

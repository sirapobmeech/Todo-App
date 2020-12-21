import React, { useState, useEffect } from 'react';
import { exampleFetch } from '../actions/exampleActions';
import { useSelector, useDispatch } from 'react-redux';
import Table from '../components/Table';
import logo from '../assets/images/umeal.png'

function Home() {
    const dispatch = useDispatch()
    let InitialUser = useSelector(state => state.example)
    const [exampleUsers, setexampleUsers] = useState([])

    useEffect(() => {
        dispatch(exampleFetch()) // เรียกใช้งาน Action เพื่อสร้าง api request เมื่อ Component ทำการ mounted เรียบร้อยแล้ว
    }, [])
    useEffect(() => {
        setexampleUsers(InitialUser)
        console.log("receieve data : ", InitialUser)
    }, [InitialUser])
    return (
        <div className="oc">
            <h1 style={{ textAlign: "center" }}>
                This is an React-Seed for Developers
            </h1><br />
            <div style={{ display: "flex", justifyContent: "center" }} >
                <img src={logo} />
            </div><br />
            {/* ---------- ตัวอย่างข้อมูลที่มากจากการเรียกใช้งาน API ---------- */}
            <h1 style={{ textAlign: "center" }}>
                Example users data from "jsonplaceholder API"
            </h1><br />
            {exampleUsers.pending === true && <div>
                <h1>Loading</h1>
            </div>}
            {(!exampleUsers.error) ? <div>{<Table usersObj={exampleUsers} />}</div> : <h1>Error</h1>}
            {/* ------------------------------------------------------------- */}
        </div>
    )
}
export default Home
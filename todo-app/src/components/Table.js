import React from 'react';

export default function Table(props) {
    return (
        <div>
            {props.usersObj.pending && <h1>
                Loading
            </h1>}
            {props.usersObj.pending && <h1>
                Network Error !
            </h1>}
            <table style={{ width: "100%" }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>email</th>
                        <th>phone</th>
                    </tr>
                </thead>
                {(!props.usersObj.error && !props.usersObj.pending && props.usersObj.data && (props.usersObj.data.length > 0)) ?
                    <tbody>
                        {props.usersObj.data.map((elem, index) => <tr key={index}>
                            <td>{elem.name}</td>
                            <td>{elem.username}</td>
                            <td>{elem.email}</td>
                            <td>{elem.phone}</td>
                        </tr>)}
                    </tbody> : <tbody></tbody>}
            </table>
        </div>
    )
}
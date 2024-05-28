import {Table} from "react-bootstrap";
import React, {useState} from "react";

export const Checks = () => {
    const [currentData, setCurrentData] = useState([]);
    return (
        <>
            <div className="table-container">
                <Table className="table-prizes">
                    <thead className="thead">
                    <tr className="title-table">
                        <th className="title-name-checks">Дата</th>
                        <th className="title-name-checks">Номер чека</th>
                        <th className="title-name-checks">Статус</th>
                    </tr>
                    </thead>
                    <tbody className="table-body">
                    {currentData.map((user, index) => (
                        <tr key={index}>
                            <td className="table-name">{user.username}</td>
                            <td>{user.phone}</td>
                            <td>{user.date}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </div>
        </>
    )
}
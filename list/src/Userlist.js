import React from 'react'

export default function Userlist() {

    const Userdata = [
        { ID: 1, Name: 'Ayan ', Age: 20 },
        { ID: 2, Name: 'Raj ', Age: 20 },
        { ID: 3, Name: 'Meet ', Age: 20 },
        { ID: 4, Name: 'Deep', Age: 20 },
        { ID: 5, Name: 'Prem', Age: 19 },
        { ID: 6, Name: 'Shreyas', Age: 19 },
        { ID: 6, Name: 'Bro', Age: 17 },
    ]

    return (
        <div>

            <div className="container">

                <table>
                        <h3>User Data</h3>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>

                    <tbody>
                        {

                            Userdata.map((user, index) => (
                                <tr key={index}>

                                    <td>{user.ID}</td>
                                    <td>{user.Name}</td>
                                    <td>{user.Age}</td>

                                </tr>
                            ))


                        }
                    </tbody>

                </table>

            </div>

        </div>
    )
}

import React from 'react'

export default function Medicine(props) {


    const MedicineList = [
        {id: 1, Name: 'Abacavir', Quantity: 25, Price: 150, Expiry: 2022},
        {id: 2, Name: 'Eltrombopag', Quantity: 90, Price: 550, Expiry: 2021},
        {id: 3, Name: 'Meloxicam', Quantity: 85, Price: 450, Expiry: 2025},
        {id: 4, Name: 'Allopurinol', Quantity: 50, Price: 600, Expiry: 2023},
        {id: 5, Name: 'Phenytoin', Quantity: 63, Price: 250, Expiry: 2021}
    ]

  return (
   <div>

        <div className='container'>
                                          
            <table>
            <h3>Medicine Data</h3>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Expiry</th>
                    </tr>
                </thead>

                <tbody>
                    
                    {
                        MedicineList.map((detail, index)=>(
                            <tr key={index}>
                                <td>{detail.id}</td>
                                <td>{detail.Name}</td>
                                <td>{detail.Quantity}</td>
                                <td>{detail.Price}</td>
                                <td>{detail.Expiry}</td>
                            </tr>
                        ))
                    }

                </tbody>

            </table>

        </div>
    
        </div>
  )
}

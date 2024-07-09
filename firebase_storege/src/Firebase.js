import React, { useEffect, useState } from 'react'
import { onValue, ref, set, remove } from 'firebase/database'
import { database } from './Config'

const Firebase = () => {

  const [id, setId] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState([])
  const [watch, setWatch] = useState(false)

  const Handlesubmit = (e) => {
    e.preventDefault();
    const Data = ref(database, `UserData/${id}`);
    set(Data, { email, password })
    setEmail("")
    setPassword("")
  }

  const ManagePassword = ()=> {
    if(watch === false){
      setWatch(true)
    }
    else{
      setWatch(false)
      }
  }


  const handleDelete = (index)=> {
    const Data = ref(database, `UserData/${index}`)
    remove(Data)

  }

  useEffect(() => {

    const userEntries = ref(database, 'UserData')
    onValue(userEntries, (entries) => {
      const newData = entries.val()
    // const data = Object.entries(newData)
      console.log("coming Data : ", userData)

      if(newData){

        const StoredData = Object.keys(newData).map((key)=>({
          
          id: key,
          email: newData[key].email,
          password: newData[key].passwords,
          ...newData[key],
         
        }))

        setUserData(StoredData)
        console.log(StoredData)
      }
      else{
        setUserData([])
      }

     

    })


  }, [])

  return (
    <div className="main">
      <div className="box">
        <form action="">
          <input type="number" placeholder='Enter ID' value={id} onChange={(e) => setId(e.target.value)} />
          <input type="text" placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type={watch === false ? "password" : 'text'} placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)} />
          <div className="eye">
            {
              watch === false ? <i className="fa fa-eye" onClick={ManagePassword} /> :    <i className="fa-solid fa-eye-slash" onClick={ManagePassword}></i>           

            }
          </div>
          
          <button onClick={Handlesubmit}>Submit</button>
        </form>
      </div>

      <table>
        <thead>

          <tr>
            <th>ID</th>
            <th>Email Id</th>
            <th>Password</th>
            <th>Remove</th>
          </tr>

        </thead>
        <tbody>

          {userData.map((data, index) => {
            return (
              <tr key={index}>
                <td>{data.id}</td>
                <td>{data.email}</td>
                <td>{data.password}</td>
                <td onClick={()=>handleDelete(data.id)}><i className="fa-solid fa-trash"></i></td>

              </tr>

            )
          })}

        </tbody>


      </table>

    </div>
  )
}
export default Firebase

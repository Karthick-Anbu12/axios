import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import content from './Context'


function Cards({ data }) {
    const { remove } = useContext(content)
    return (
        <div className="card m-2 bg-dark text-white" style={{ width: "22rem" }}>
            <div className="card-body ">
                <h4 className="card-title">{data.name}</h4>
                <h6 className="card-subtitle mb-2 ">Username:{data.username}</h6>
                <h6 className="card-subtitle mb-2 ">Mail:{data.email}</h6>
                <h6 className="card-subtitle mb-2 ">Phone:{data.phone}</h6>
                <h6 className="card-subtitle mb-2 ">Address:{data.address.street},{data.address.city}</h6>
                <div className="card-text mb-2">Company:{data.company.name}<div>Role:{data.company.catchPhrase}</div></div>
                <div className='text-end'>
                    <button className='btn btn-danger ' onClick={() => remove(data)}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Cards
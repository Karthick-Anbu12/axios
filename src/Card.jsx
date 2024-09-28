import React, { useContext } from 'react'

import { Link, Outlet } from 'react-router-dom'
import Cards from './Cards'
import content from './Context'
function Card() {
   const {datas}=useContext(content)
    return (<>
        <Link to='/form' className="btn btn-primary mt-3 ms-3" data-toggle="modal" data-target="#exampleModal">Add User</Link>
        <Outlet />
        <div className='d-flex flex-wrap m-1'>
            {
                datas.map((data,index) => {
                    return <Cards data={data} index={index}></Cards>
                })
            }
        </div>
    </>
    )
}

export default Card

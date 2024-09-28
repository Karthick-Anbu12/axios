import React, { useContext } from "react"
import { useNavigate } from 'react-router-dom'
import { useFormik } from "formik"
import axios from "axios"

function Form() {
  const navigation = useNavigate()

  const formik = useFormik({
    initialValues: {
      name: "",
      username: "",
      mail: "",
      phone: "",
      address: {
        street: "",
        city: ""
      },
      company: {
        name: "",
        catchphrase: ""
      }
    },
    validate: (values) => {
      let error = {}
      if (values.name == "" || values.name.length <= 3)
        error.name = "Please enter the name"
      if (values.username == "" || values.username.length <= 3)
        error.username = "Please enter the name"
      if (values.mail == "" || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.mail))
        error.mail = "Please enter the name"
      if (values.phone == "" || values.phone > 9999999999 || values.phone < 1000000000)
        error.phone = "plese enter number"
      return error

    },
    onSubmit: async (values) => {
      console.log(values)
      navigation(-1)
      try {
        await axios.post("https://66f7a4d7b5d85f31a3432efb.mockapi.io/users", values)

      } catch (error) {
        console.log("something went wrong")
      }
    }
  })

  return (

    <div className="modal" tabindex="-1" role="dialog" style={{ display: 'block' }}>
      <div className="modal-dialog " role="document">
        <div className="modal-content bg-dark text-light ">
          <form className="m-5 " onSubmit={formik.handleSubmit}>
            <h3>Enter User Data</h3>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label >Name</label>
                <input type="text" className={`form-control ${formik.errors.name && 'is-invalid'}`} id="inputEmail4" placeholder="Enter name" name='name'
                  value={formik.values.name} onChange={formik.handleChange} />
                <label >Username</label>
                <input type="text" className={`form-control ${formik.errors.username && 'is-invalid'}`} id="inputEmail4" placeholder="Enter username" name='username'
                  value={formik.values.username}
                  onChange={formik.handleChange} />
              </div>
              <div className="form-group col-md-8">
                <label for="inputPassword4">Mail</label>
                <input type="email" className={`form-control ${formik.errors.mail && 'is-invalid'}`} id="inputPassword4" placeholder="Enter Mail" name='mail'
                  value={formik.values.mail}
                  onChange={formik.handleChange} />
              </div>
            </div>
            <div className="form-group">
              <label for="inputAddress">Phone</label>
              <input type="number" className={`form-control ${formik.errors.phone && 'is-invalid'}`} id="inputAddress" placeholder="Phone Number" name='phone'
                value={formik.values.phone}
                onChange={formik.handleChange} />
            </div>
            <div className="form-group">
              <label for="inputAddress2">Street</label>
              <input type="text" className="form-control" id="inputAddress2" placeholder="Street" name='address.street'
                value={formik.values.address.street}
                onChange={formik.handleChange} />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="inputCity">City</label>
                <input type="text" className="form-control" id="inputCity" name='address.city'
                  value={formik.values.address.city}
                  onChange={formik.handleChange} />
              </div>
              <div className="form-group col-md-8">
                <label for="inputcompany">Company</label>
                <input type="text" id="inputcompany" className="form-control" placeholder="Company" name='company.name'
                  value={formik.values.company.name}
                  onChange={formik.handleChange} />
              </div>
              <div className="form-group col-md-8">
                <label for="inputZip">Role</label>
                <input type="text" className="form-control" id="inputZip" name='company.catchphrase'
                  value={formik.values.company.catchphrase}
                  onChange={formik.handleChange} />
              </div>
            </div>
            <input type="submit" class="btn btn-primary mt-2" value={'Add User'} />
          </form>
          <div className="text-center">
            <button className="btn btn-danger text-center mb-2" style={{ width: "5rem" }} onClick={() => navigation(-1)}>Close</button>
          </div>

        </div>

      </div>

    </div>

  )

}

export default Form

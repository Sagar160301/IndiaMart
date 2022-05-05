import './Navbar2.css'

import React from 'react'

import EmailIcon from '@mui/icons-material/Email'
const Navbar2 = () => {
  return (
    <div>
      <div className="Navbar2">
        <div className="Navbar2first">
          <div className="Navbar2first1">Home</div>
          <div className="Navbar2first2">
            Products and Services
            <div className="dropdown1">
              <div className="drop1">
                <table className="t1">
                  <thead>
                    <tr>
                      <th>
                        <a href="">Oxygen Supplies</a>
                      </th>
                      <th>
                        <a href="">Medicines</a>
                      </th>
                      <th>
                        <a href="">Oxygen Supplies</a>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                   
                   
                   
                   
                    <tr>
                      <td>
                        <a href="">Oxygen Flow Meter</a>
                      </td>
                      <td>
                        <a href="">Enoxaparin Injection</a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="">Oxygen Mask</a>
                      </td>
                      <td>
                        <a href="">Baricitinib Tablets</a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="">Oxygen Generator</a>
                      </td>
                      <td>
                        <a href="">Bevacizumab</a>
                      </td>
                    </tr>
                  
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="Navbar2first3">About Us</div>
          <div className="Navbar2first4">Contact Us</div>
        </div>
        <div className="Navbar2second">
          <div>
            <EmailIcon
              style={{ color: 'white', fontSize: '25px', marginRight: '8px' }}
            />
          </div>
          <div style={{ color: 'white', fontSize: '18px' }}>Send Email</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar2

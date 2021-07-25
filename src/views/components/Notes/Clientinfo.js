import React from 'react'
import Notestable from './Notestable'
import {
  CRow,
  CCol,
  CContainer,
  CFormSelect,
  CFormCheck,
  CInputGroup,
  CInputGroupText,
  CFormControl,
} from '@coreui/react'
function Clientinfo() {
  return (
    <>
      <CContainer>
        <CRow>
          <div>
            <CCol sm="auto">
              <CInputGroup size="sm" className="mb-3">
                <CInputGroupText id="search">Client Name: </CInputGroupText>
                <CFormControl
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </CInputGroup>
              {/*<label>Client Name</label>
              <CFormSelect aria-label="Default select example">
                <option>client1</option>
                <option>client 2</option>
              </CFormSelect>*/}
              <CFormCheck id="init_comp" label="Initial Compas Completed?" />
              <br></br>
              <label>Current Level</label>
              <CFormSelect size="sm">
                <option>0</option>
                <option>1</option>
              </CFormSelect>
            </CCol>
            <br></br>
            <CCol sm="auto">
              <CInputGroup size="sm" className="mb-3">
                <CInputGroupText id="inputGroup-sizing-sm">Last Compas Eval Date: </CInputGroupText>
                <CFormControl
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </CInputGroup>
              <CInputGroup size="sm" className="mb-3">
                <CInputGroupText id="inputGroup-sizing-sm">Next Compas Eval Date: </CInputGroupText>
                <CFormControl
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </CInputGroup>
            </CCol>
            <br></br>
            <CCol sm="auto">
              <div className="filters">
                <b>FILTERS </b>
                <br></br>
                <label> Added BY </label>
                <CFormSelect>
                  <option>admin 1</option>
                  <option>admin 2</option>
                </CFormSelect>
                <label> Contact Type </label>
                <CFormSelect>
                  <option>admin 1</option>
                  <option>admin 2</option>
                </CFormSelect>
              </div>
            </CCol>
          </div>
        </CRow>
        <br></br>
        <CRow>
          <Notestable></Notestable>
        </CRow>
      </CContainer>
    </>
  )
}

export default Clientinfo

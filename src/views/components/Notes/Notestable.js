import React from 'react'
import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
function Notestable() {
  return (
    <CTable>
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell scope="col">Dates Of Note</CTableHeaderCell>
          <CTableHeaderCell scope="col">Notes</CTableHeaderCell>
          <CTableHeaderCell scope="col">Date Added</CTableHeaderCell>
          <CTableHeaderCell scope="col">Time Added</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        <CTableRow>
          <CTableHeaderCell scope="row">1/5/2017</CTableHeaderCell>
          <CTableDataCell>knknknkn</CTableDataCell>
          <CTableDataCell>1/5/2017</CTableDataCell>
          <CTableDataCell>11:30</CTableDataCell>
        </CTableRow>
      </CTableBody>
    </CTable>
  )
}
export default Notestable

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CSidebar, CSidebarNav, CSidebarToggler, CCreateNavItem } from '@coreui/react'

import navigation from '../_nav'
const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)
  const nosidebarclick = () => {
    dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })
  }
  return (
    <CSidebar
      position="fixed"
      selfHiding="md"
      unfoldable={unfoldable}
      show={sidebarShow}
      onShow={() => console.log('show')}
      onHide={() => {
        dispatch({ type: 'set', sidebarShow: false })
      }}
    >
      <CSidebarNav>
        <CCreateNavItem items={navigation} />
      </CSidebarNav>
      <CSidebarToggler className="d-none d-lg-flex" onClick={nosidebarclick} />
    </CSidebar>
  )
}

export default React.memo(AppSidebar)

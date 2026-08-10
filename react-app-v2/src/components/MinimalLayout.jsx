import { Outlet } from 'react-router-dom'
import LeadPopup from './LeadPopup.jsx'

// For pages that ship with no header/footer in source (e.g. schedule-free-demo.html) —
// confirmed by absence of <header id="header"> / <footer> tags in that page's raw HTML.
export default function MinimalLayout() {
  return (
    <div id="wrap">
      <Outlet />
      <LeadPopup />
    </div>
  )
}

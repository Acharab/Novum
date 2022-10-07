import { useState } from "react"
import Navbar from "./elements/navbar"
import Footer from "./elements/footer"
import NotificationBanner from "./elements/notification-banner"

const Layout = ({ children, global, pageContext }) => {
  const { navbar, footer, navicons } = global.attributes

  const [bannerIsShown, setBannerIsShown] = useState(true)
  
  return (
    <div className="flex flex-col justify-between min-h-screen">
      {/* Aligned to the top */}
      
        <Navbar navbar={navbar} navicons={navicons} pageContext={pageContext} />
        <div>{children}</div>
      
      {/* Aligned to the bottom */}
      <Footer footer={footer} />
    </div>
  )
}

export default Layout

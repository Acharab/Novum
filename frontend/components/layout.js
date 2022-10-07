import { useState } from "react";
import Navbar from "./elements/navbar";
import Footer from "./elements/footer";
import NotificationBanner from "./elements/notification-banner";
import CookieConsent from "react-cookie-consent";

const Layout = ({ children, global, pageContext }) => {
  const { navbar, footer, navicons } = global.attributes;

  const [bannerIsShown, setBannerIsShown] = useState(true);
  
  return (
    <div className="flex flex-col justify-between min-h-screen">
      
      <CookieConsent 
        // debug={true}
        location="bottom"
        buttonText="Accepteren"
        enableDeclineButton={true}
        declineButtonText="Weigeren"
        cookieName="cookieButton"
        style={{ background: "rgb(249, 115, 22)", color: "#000", fontWeight: "bold"}}
        buttonStyle={{ color: "#fff", fontSize: "1emx", background: "#005cb2", borderRadius: "5px"}}
        declineButtonStyle={{ color: "#fff", fontSize: "1em", borderWidth: "1px", borderColor: "#000", borderRadius: "5px"}}
        expires={7}
        overlay
      >
        Deze website gebruikt cookies voor het verzamelen van analytische gegevens om uw gebruikerservaring te verbeteren.{" "}
        {/* <span style={{ fontSize: "10px", color: "#fff", fontWeight: "400" }}>In de <a className="text-dark-blue" href="/cookie-verklaring">cookieverklaring</a> kunt u bekijken waar wij uw gegevens exact voor gebruiken.</span> */}
        </CookieConsent>

      <Navbar navbar={navbar} navicons={navicons} pageContext={pageContext} />
      <div>{children}</div>
      {/* Aligned to the bottom */}
      <Footer footer={footer} />
    </div>
  );
};

export default Layout;

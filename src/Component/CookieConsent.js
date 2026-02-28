import CookieConsent from "react-cookie-consent";

function CookieBanner() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      enableDeclineButton
      cookieName="myWebsiteCookieConsent"
      style={{ background: "#1f2937" }}
      buttonStyle={{ color: "#fff", background: "#4f46e5" }}
      declineButtonStyle={{ background: "#6b7280", color: "#fff" }}
      expires={365}
    >
      This website uses cookies to ensure proper functionality, analyze performance, and deliver relevant content. By clicking "Accept", you consent to the use of cookies in accordance with our Privacy Policy and Cookie Policy.
    </CookieConsent>
  );
}

export default CookieBanner;
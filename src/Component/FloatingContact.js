import { useState } from "react";


const FloatingContact = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    // 🔒 FIRST hide Tidio so it cannot catch click
    if (window.tidioChatApi) {
      window.tidioChatApi.hide();
    }

    // 🔓 Then open your popup
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
 window.tidioChatApi.hide();
    // 🔁 Show Tidio back
    if (window.tidioChatApi) {
      window.tidioChatApi.hide();
    }
  };
window.tidioChatApi?.on("close", function () {
  window.tidioChatApi.hide();
});
  return (
    <>
      {/* Floating Button */}
      <div className="fab-wrapper">
        <div
          className="contact-message-box"
          onClickCapture={handleOpen}   // 👈 VERY IMPORTANT
        >
          <div className="static">
            <img
              src="https://virtualassistant24x7.com/wp-content/uploads/2026/01/Untitled-design-15.gif"
              width="60"
              height="60"
              alt="Contact Message Box"
            />
            <div className="pulsation"></div>
            <div className="pulsation"></div>
          </div>
        </div>
      </div>

      {/* Popup */}
      {open && (
        <>
          <div className="fc-overlay" onClick={handleClose}></div>

          <div className="fc-popup">
            <div className="fc-header">
              <h3>Quick Contact</h3>
              <button onClick={handleClose}>✕</button>
            </div>

            <div className="fc-actions">
              <a href="tel:+19294707990"><img src="https://virtualassistant24x7.com/wp-content/uploads/2026/01/phone-call-1.png"></img> Call</a>
              <a href="mailto:sales@citadelcoworkers.com"><img src="https://virtualassistant24x7.com/wp-content/uploads/2026/01/email-4.png"></img> Email</a>
            

              <button
                onClick={() => {
                  if (window.tidioChatApi) {
                    window.tidioChatApi.show();
                    window.tidioChatApi.open();
                  }
                  setOpen(false);
                }}
              >
                <img src="https://virtualassistant24x7.com/wp-content/uploads/2026/01/chat-1-1.png"></img> Live Chat
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default FloatingContact;

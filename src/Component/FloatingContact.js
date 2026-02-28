import { useEffect, useState } from "react";

const FloatingContact = () => {
  const [open, setOpen] = useState(false);
  const [showLiveChat, setShowLiveChat] = useState(true);

  // 🔍 Check country on load
  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        if (data?.country === "IN") {
          setShowLiveChat(false);
          if (window.tidioChatApi) window.tidioChatApi.hide();
        }
      })
      .catch(() => {
        // fallback using language
        const lang = navigator.language || "";
        if (lang.startsWith("hi") || lang === "en-IN") {
          setShowLiveChat(false);
          if (window.tidioChatApi) window.tidioChatApi.hide();
        }
      });
  }, []);

  const handleOpen = () => {
    // hide Tidio before opening popup
    if (window.tidioChatApi) {
      window.tidioChatApi.hide();
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    if (window.tidioChatApi) {
      window.tidioChatApi.hide();
    }
  };

  // Ensure tidio stays hidden if someone closes it
  window.tidioChatApi?.on("close", function () {
    window.tidioChatApi.hide();
  });

  return (
    <>
      {/* Floating Button */}
      <div className="fab-wrapper">
        <div className="contact-message-box" onClickCapture={handleOpen}>
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
              <a href="tel:+19294707990">
                <img src="https://virtualassistant24x7.com/wp-content/uploads/2026/01/phone-call-1.png" />
                Call
              </a>
              <a href="mailto:sales@citadelcoworkers.com">
                <img src="https://virtualassistant24x7.com/wp-content/uploads/2026/01/email-4.png" />
                Email
              </a>
           

              {/* 🔥 Live Chat button only for non-India users */}
              {showLiveChat && (
                <button
                  onClick={() => {
                    if (window.tidioChatApi) {
                      window.tidioChatApi.show();
                      window.tidioChatApi.open();
                    }
                    setOpen(false);
                  }}
                >
                  <img src="https://virtualassistant24x7.com/wp-content/uploads/2026/01/chat-1-1.png" />
                  Live Chat
                </button>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default FloatingContact;

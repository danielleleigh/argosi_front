import emailjs from "emailjs-com";
import React, { useRef } from "react";

//allows user to email clients. can be used as appointment reminder.

export default function EmailClient() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_tm98n57",
        "template_hu4zzzc",
        e.target,
        "user_BhyoEdnYub7E2ysRCasJj"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          color: "#FFC4C1",
          fontFamily: "MoonwildDecorative",
          fontWeight: "bold",
          padding: "2%",
          textDecoration: "underline",
        }}
      >
        Email A Client
      </h1>
      <div className="container">
        <form onSubmit={sendEmail}>
          <div className="row pt-5 mx-auto">
            <div className="col-8 form-group mx-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Client Name"
                name="name"
              />
            </div>
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <input
              type="email"
              className="form-control"
              placeholder="Email Address"
              name="email"
            />
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Subject"
              name="subject"
            />
          </div>
          <div className="col-8 form-group pt-2 mx-auto">
            <textarea
              type="email"
              className="form-control"
              id=""
              cols="30"
              rows="8"
              placeholder="Your Message"
              name="message"
            />
          </div>
          <div className="col-8 pt-3 mx-auto">
            <input
              type="submit"
              className="btn btn-info"
              value="Send Message"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

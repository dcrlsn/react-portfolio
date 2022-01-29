import React from "react";
import Form from "./Form";

export default function Contact() {
  return (
    <div className="container py-4" id="contact">
      <div className="pb-3 mb-4 border-bottom">
        <h4 className="fs-4 text-muted">Contact</h4>
      </div>

      <div className="p-5 mb-4 text-white bg-dark rounded-3">
        <div className="container-fluid py-5 ">
          <Form />
        </div>
      </div>
    </div>
  )
}
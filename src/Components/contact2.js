import React, { useState } from 'react';

function FormToSheet() {
  const [loading, setLoading] = useState(false); // Track sending state

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // start loading

    const url = "https://script.google.com/macros/s/AKfycbwA3W6LFj99v1Bjz2EFhHj5B0pZVMmKitF332KYSHIsoRrV8TL2r5NwMAcURHTGjldU/exec";

    const formData = new URLSearchParams();
    formData.append('Name', e.target.name.value);
    formData.append('Email', e.target.email.value);
    formData.append('Subject', e.target.subject.value);
    formData.append('Message', e.target.message.value);

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formData.toString()
    })
      .then(res => res.text())
      .then(data => {
        // alert(data);
        e.target.reset(); // clear form
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false)); // stop loading
  };

  return (
    <div className="container mt-5">
      {/* <h1 className="text-center mb-4">React to Sheet</h1> */}
      <form onSubmit={handleSubmit} className="mt-5">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input name="name" className="form-control" placeholder="Enter your name" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input name="email" type="email" className="form-control" placeholder="Enter your email" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Subject</label>
          <input name="subject" className="form-control" placeholder="Enter subject" required />
        </div>

        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea name="message" className="form-control" rows="4" placeholder="Enter your message" required></textarea>
        </div>

        <button type="submit" className="btn btn-primary w-100" disabled={loading}>
          {loading ? (
            <span>
              <span className="spinner-border spinner-border-sm me-2"></span>
              Sending...
            </span>
          ) : (
            "Send"
          )}
        </button>
      </form>
    </div>
  );
}

export default FormToSheet;

import React, { useState } from 'react';

function FormToSheet() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // handle submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    const { name, email, subject, message } = formData;

    setLoading(true);
    setSuccess(false);

    try {
      const res = await fetch(
        "https://edgedatalead-default-rtdb.firebaseio.com/leads.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name, email, subject, message
          })
        }
      );

      if (res.ok) {
        setSuccess(true);

        // reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });

        // reset button after 3 sec
        setTimeout(() => setSuccess(false), 3000);
      } else {
        alert("Failed to store data");
      }

    } catch (error) {
      console.error(error);
      alert("Network error");
    }

    setLoading(false);
  };

  return (
    <div className="container mt-5" id='ContactUs'>
      <form onSubmit={handleSubmit} className="mt-5">

        {/* Name */}
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Subject */}
        <div className="mb-3">
          <label className="form-label">Subject</label>
          <input
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter subject"
            required
          />
        </div>

        {/* Message */}
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="form-control"
            rows="4"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="btn btn-primary w-100"
          disabled={loading}
        >
          {loading ? (
            <>
              <span className="spinner-border spinner-border-sm me-2"></span>
              Sending...
            </>
          ) : success ? (
            "Submitted ✅"
          ) : (
            "Submit"
          )}
        </button>

      </form>
    </div>
  );
}

export default FormToSheet;
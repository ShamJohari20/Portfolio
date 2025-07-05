import React, { useState } from "react";
import { Send, MapPin, Mail } from "lucide-react";
import "./Contact.css";
import { db } from "@/Firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    }
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
      isValid = false;
    }
    if (!formData.subject.trim()) {
      tempErrors.subject = "Subject is required";
      isValid = false;
    }
    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus("Please fill in all required fields correctly.");
      return;
    }

    try {
      await addDoc(collection(db, "contacts"), {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        createdAt: serverTimestamp(),
      });
      setStatus("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setErrors({});
    } catch (error) {
      setStatus("An error occurred. Please try again.");
      console.error("Firestore Error:", error);
    }
  };

  return (
    <main className="contact-main">
      <section className="contact-hero">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info">
              <div>
                <h2 className="contact-heading">Get in Touch</h2>
                <p className="contact-subheading">
                  Have a question or want to work together? Drop me a message!
                </p>
              </div>
              <div className="contact-details">
                <div className="contact-detail-item">
                  <div className="contact-icon mail">
                    <Mail className="icon" />
                  </div>
                  <div>
                    <h3>Email</h3>
                    <p>shamjohari101@gmail.com</p>
                  </div>
                </div>
                <div className="contact-detail-item">
                  <div className="contact-icon map">
                    <MapPin className="icon" />
                  </div>
                  <div>
                    <h3>Location</h3>
                    <p>Pune, Maharashtra, India</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-grid">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className={`contact-input ${errors.name ? "input-error" : ""}`}
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                    {errors.name && (
                      <p className="error-text">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className={`contact-input ${errors.email ? "input-error" : ""}`}
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                    {errors.email && (
                      <p className="error-text">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Subject"
                      className={`contact-input ${errors.subject ? "input-error" : ""}`}
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                    />
                    {errors.subject && (
                      <p className="error-text">{errors.subject}</p>
                    )}
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows="4"
                      className={`contact-input textarea ${errors.message ? "input-error" : ""}`}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    ></textarea>
                    {errors.message && (
                      <p className="error-text">{errors.message}</p>
                    )}
                  </div>
                </div>
                <button
                  type="submit"
                  className="contact-submit"
                >
                  <span>Send Message</span>
                  <Send className="submit-icon" />
                </button>
              </form>
              {status && (
                <div className={`status-message ${status.includes("success") ? "success" : "error"}`}>
                  <p>{status}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
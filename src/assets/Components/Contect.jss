.contact-section {
  padding: 80px 8%;
  background: #f5f5f5;
}

.contact-title {
  text-align: center;
  font-size: 40px;
  margin-bottom: 60px;
}

.contact-container {
  display: flex;
  align-items: stretch;
  gap: 50px;
}

/* LEFT FORM */
.contact-form {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 14px;
  border: 2px solid black;
  font-size: 16px;
}

.contact-form textarea {
  height: 120px;
  resize: none;
}

/* BUTTON CENTERED */
.button-wrapper {
  display: flex;
  justify-content: center;
}

.contact-form button {
  padding: 10px 40px;
  border: 2px solid black;
  background: white;
  cursor: pointer;
}

/* VERTICAL LINE */
.vertical-line {
  width: 3px;
  background: black;
}

/* RIGHT MAP */
.contact-map {
  flex: 1.5;
  border: 3px solid black;
  border-radius: 15px;
  overflow: hidden;
}

.contact-map iframe {
  width: 100%;
  height: 100%;
  min-height: 420px;
  border: none;
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .contact-container {
    flex-direction: column;
  }

  .vertical-line {
    display: none;
  }
}
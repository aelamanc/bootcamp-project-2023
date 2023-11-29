import React from 'react';
import style from "./navbar.module.css";

export default function Contact() {
  return (
    <>
      <main>
        <h1 className={'page-title'}>Contact</h1>
        <div className={'about animate'}>
          <form id="contact-form">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <input type="submit" value="Submit" />
          </form>
        </div>
      </main>
      <footer className={'footer'}>
        © 2023 Akhil Elamanchili | All Rights Reserved
      </footer>
    </>
  );
}

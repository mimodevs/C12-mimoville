import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const Footer = () => {
  return (
    <footer>
      <div>
        <section class="Social-container">
          <a href="#" class="social-btn">
            <img src="/assets/fblogo.png"></img>
          </a>

          <a href="#" class="social-btn">
            <img src="/assets/instalogo.png"></img>
          </a>

          <a href="#" class="social-btn">
            <img src="/assets/ghlogo.png"></img>
          </a>
        </section>
      </div>
      <div>
        <h4>Contact Us!</h4>
        <p>987-461-9884</p>
        <p>or</p>
        <p>Kexample@mimoville.com</p>
        <h4>Questions?</h4>
        <form>
          <label for="Email">Email:</label>
          <input type="text" placeholder="example@123.com"></input>
          <label for="Questions">Questions:</label>
          <input type="text" placeholder="Type here"></input>
        </form>
      </div>
    </footer>
  );
};

export default Footer;

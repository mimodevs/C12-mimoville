import React from "react";
import "bootstrap/dist/css/bootstrap.css";


const Footer = () => {
  return (
    <footer>
    <div>

      <section>
        <a
          href="#!"
          role="button"
          ><i class="fab fa-facebook-f">facebook</i
        ></a>
  
        <a
          href="#!"
          role="button"
          ><i class="fab fa-twitter"></i
        ></a>
  
        <a
          href="#!"
          role="button"
          ><i class="fab fa-google"></i
        ></a>
  
        <a
          href="#!"
          role="button"
          ><i class="fab fa-instagram"></i
        ></a>
  
        <a
          href="#!"
          role="button"
          ><i class="fab fa-linkedin-in"></i
        ></a>

        <a

          href="#!"
          role="button"
          ><i class="fab fa-github"></i
        ></a>
      </section>

    </div>

    <div class="text-center p-3" >
      © 2020 Copyright:
      <a class="text-white" >MDBootstrap.com</a>
    </div>
  </footer>
  );
};

export default Footer;
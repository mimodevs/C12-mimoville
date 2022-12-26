import React from "react";

const AboutPage = () => {
  return (
    <>
      <section className="about">
        <h2>About</h2>
        <p>
          Mimoville is an online marketplace that connects people who want to rent out their homes with people who are looking for accommodations in specific locations. Mimoville offers people an easy, relatively stress-free way to earn some income from their property.
          Guests often find Mimoville is cheaper, has more character, and is homier than hotels. Mimoville makes the bulk of its revenue by charging a service fee for each booking.
        </p>
      </section>
      <section className="team">
        <h2>Our Team</h2>
        <div className="members-container">
          <div className="member-card">
            <h3>Michael P.</h3>
            <p><strong>Bio:</strong> Air Force Veteran and Junior Web Developer with a bachelor's degree in Criminal Justice from Stockton University.</p>
          </div>
          <div className="member-card">
            <h3>Brandy C.</h3>
            <p><strong>Bio:</strong></p>
          </div>
          <div className="member-card">
            <h3>Mayte V.</h3>
            <p><strong>Bio:</strong>Economist transitioning to the web development world. Passionate about watercolor art, music, discovering new places and coding. Always learning.</p>
          </div>
          <div className="member-card">
            <h3>Rolando A.</h3>
            <p><strong>Bio:</strong></p>
          </div>
          <div className="member-card">
            <h3>Gage C.</h3>
            <p><strong>Bio:</strong></p>
          </div>
        </div>

      </section>
    </>
  );
};

export default AboutPage;

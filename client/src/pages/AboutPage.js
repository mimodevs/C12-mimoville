import React from "react";

const AboutPage = () => {
  return (
    <>
      <section className="about">
        <h2>About</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          auctor eget orci sed lobortis. Suspendisse vel nisi nisl. Vivamus
          ipsum mi, fringilla id eros vitae, semper pulvinar eros. Vestibulum
          placerat, diam nec suscipit luctus, arcu mi rhoncus turpis, id
          eleifend augue neque quis dolor. Curabitur nec enim vitae nulla
          ullamcorper scelerisque a eget ligula. Vestibulum fringilla erat nisi,
          eget posuere justo vehicula id. Etiam euismod, sapien id sollicitudin
          rhoncus, eros mi vestibulum augue, ac lacinia urna purus ac sem.
          Nullam imperdiet leo ut ex semper condimentum. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
      </section>
      <section className="team">
        <h2>Our Team</h2>
        <div className="members-containter">
          <div className="member-card">
            <h3>Michael</h3>
          </div>
          <div className="member-card">
            <h3>Brandy</h3>
          </div>
          <div className="member-card">
            <h3>Mayte</h3>
          </div>
          <div className="member-card">
            <h3>Rolando</h3>
          </div>
        </div>

      </section>
    </>
  );
};

export default AboutPage;

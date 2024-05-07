import React from "react";


let image ="https://img.freepik.com/free-photo/animal-wild-nature-undomesticated-cat-close-up-portrait-generative-ai_188544-8150.jpg?t=st=1715101594~exp=1715105194~hmac=09547d7aafe76c443529fa54f289c126fa8a19295eab6abf0e187b0b745501a6&w=740";

function About() {
  return (
    <div id="about">
      <h2>- Nova</h2>
      <p>"Never give up on your dreams"</p>
      <img src={image} alt="I made this" />
    </div>
  );
}


export {image};
export default About;

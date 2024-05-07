import React from "react";


const username ="Nova";
const city ="New York";

function Home() {
  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}


export {username,city};
export default Home;
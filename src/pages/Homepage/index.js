import { React, Link } from "libraries";

const Homepage = () => {
  return (
    <div>
      <h1>Halo, nama saya Ady Rahmansyah</h1>
      <p>
        Klik <Link to="/about">disini</Link> ke halaman tentang saya
      </p>
    </div>
  );
};

export default Homepage;

import myimg from "../assets/tnau.jpeg"; // Ensure the image path is correct

function Home() {
  return (
    <div
      className="vh-100 vw-100 d-flex justify-content-center align-items-center"
      style={{
        backgroundImage: `url(${myimg})`, // Correct way to set the background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1
        className="fs-1 fst-italic fw-bold text-info text-decoration-underline"
        style={{
          transition: "color 0.3s ease", // Add transition for color change
        }}
      >
        Welcome to Physical Science and Information Technology
      </h1>
      {/* You can add hover effect with Bootstrap utility classes */}
      <style>{`
        h1:hover {
          color: #ffcc00; /* Change color on hover */
        }
      `}</style>
    </div>
  );
}

export default Home;

function Background({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/*Title section*/}
      <div
        id="title"
        className="text-center text-white d-flex 
      justify-content-center align-items-center"
        style={{
          position: "absolute",
          top: "25%",
          left: "50%",
          width: "100%",
          textAlign: "center",
          transform: "translate(-50%, -50%)",
          flexDirection: "column",
        }}
      >
        <h1 className="text-custom-title">
          Currency Exchange Application with APIs
        </h1>
        <p className="text-custom-grey">
          An application made in{" "}
          <img
            src="src/assets/react.svg"
            style={{ width: "25px", height: "25px" }}
          ></img>
          <code style={{ color: "#75aaff" }}>React</code> using{" "}
          <img
            src="src/assets/bootstrap.svg"
            style={{ width: "30px", height: "25px" }}
          ></img>
          <code>Bootstrap</code> by yours truly :)
        </p>
      </div>

      {/*Background + Main UI*/}
      <div
        id="top-design-container"
        className="bg-dark-blue text-white d-flex justify-content-center
            align-items-center"
        style={{ height: "10vh", width: "100vw" }}
      ></div>

      <div
        id="design-container"
        className="position-absolute bg-custom-blue-gradient text-white d-flex 
          justify-content-center align-items-center"
        style={{ height: "100vh", width: "100vw", zIndex: -1 }}
      ></div>

      <div
        id="bottom-design-container"
        className="position-absolute bg-white text-white d-flex 
        justify-content-center align-items-center"
        style={{
          height: "40vh",
          width: "140vw",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: -1,
          borderRadius: "50% 50% 0px 0px",
        }}
      ></div>

      <div
        id="convertor-container"
        className="position-absolute bg-white text-white"
        style={{
          height: "33vh",
          width: "62vw",
          borderRadius: "30px",
          top: "60%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
          display: "flex", // Add this line to enable Flexbox
          flexDirection: "column", // Stack items vertically
          justifyContent: "center", // Center vertically
          alignItems: "center", // Center horizontally
        }}
      >
        {children}
      </div>
    </>
  );
}

export default Background;

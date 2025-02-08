function ReturnStyle() {
  return (
    <>
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
        className="position-absolute bg-white text-white d-flex
      justify-content-center align-items-center"
        style={{
          height: "30vh",
          width: "65vw",
          borderRadius: "30px",
          top: "60%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
        }}
      ></div>
    </>
  );
}

export default ReturnStyle;

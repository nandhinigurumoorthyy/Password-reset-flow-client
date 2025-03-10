import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useLocation } from "react-router-dom";
import { GiDirectionSign } from "react-icons/gi";
import { IoLogIn } from "react-icons/io5";
import error from "./assets/error.gif";
import "./App.css"; // Add if you want to maintain consistency in styles

function Error() {
  const location = useLocation();
  const errorMessage = location.state?.message || "An unexpected error occurred.";
  const errorDetails = location.state?.details || "";

  return (
    <>
      <div
        style={{
          backgroundColor: "rgb(252, 250, 238)",
        }}
        className="d-flex flex-column justify-content-center align-items-center vh-100 vw-100 px-3"
      >
        <div className="text-center mb-4">
          <img
            src={error}
            alt="error img"
            className="mb-4 img-fluid"
            style={{ maxWidth: "300px", width: "100%", height: "auto" }}
          />
        </div>

        <div className="text-center mb-4">
          <h3 className="fw-bold">{errorMessage}</h3>
          {errorDetails && <p className="text-danger small">{errorDetails}</p>}
        </div>

        <div className="w-100 d-flex justify-content-center gap-3 flex-wrap">
          <Link to="/create" type="button" className="btn btn-danger btn-lg flex-fill" style={{ minWidth: "120px", maxWidth: "200px" }}>
            <GiDirectionSign className="me-1" />
            SignUp
          </Link>
          <Link to="/login" type="button" className="btn btn-primary btn-lg flex-fill" style={{ minWidth: "120px", maxWidth: "200px" }}>
            <IoLogIn className="me-1" />
            LogIn
          </Link>
        </div>
      </div>
    </>
  );
}

export default Error;

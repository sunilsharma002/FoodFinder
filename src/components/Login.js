import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
            <div className="card shadow-lg p-4 rounded" style={{ width: "350px" }}>
                <h2 className="text-center mb-3">Login</h2>
                
                <form>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" placeholder="Enter your email" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" placeholder="Enter your password" />
                    </div>

                    <div className="d-grid">
                        <button type="submit" className="btn text-white bg-black">Login</button>
                    </div>

                    <div className="text-center mt-3">
                        <button type="button" className="btn btn-link text-decoration-none p-0">Forgot password?</button>
                    </div>
                </form>

                <div className="text-center mt-3">
                    <p>Don't have an account? <Link to="/Signup" className="text-decoration-none">Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;

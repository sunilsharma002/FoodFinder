import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
            <div className="card shadow-lg p-4 rounded" style={{ width: "350px" }}>
                <h2 className="text-center mb-3">Sign Up</h2>
                
                <form>
                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input type="text" className="form-control" placeholder="Enter your username" />
                    </div>
                    
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" placeholder="Enter your email" />
                    </div>
                    
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" placeholder="Enter your password" />
                    </div>
                    
                    <div className="mb-3">
                        <label className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" placeholder="Confirm your password" />
                    </div>
                    
                    <div className="d-grid">
                        <button type="submit" className="btn text-white bg-black">Sign Up</button>
                    </div>
                </form>
                
                <div className="text-center mt-3">
                    <p>Already have an account? <Link to="/Login" className="text-decoration-none">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Signup;

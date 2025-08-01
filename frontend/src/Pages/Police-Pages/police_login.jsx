function Police_login()

{

      const cardStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.8)', 
        border: 'none',
        boxShadow: 'none',
        padding: '1rem', 
        width: '100%',
        maxWidth: '500px', 
        borderRadius: '8px' 
    };
    
    return(
        <>
        <div className="card border-0 shadow rounded-3" style={cardStyle}>
                    <div className="card-body p-4 p-sm-5">
                        <h5 className="card-title text-center mb-5 fw-light fs-5">POLICE</h5>
                        <form >
                            <div className="form-floating mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder="Email"
                                    // value={email}
                                    // onChange={(e) => setEmail(e.target.value)}
                                />
                                <label htmlFor="floatingInput">Email Address</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="floatingPassword"
                                    placeholder="Password"
                                    // value={password}
                                    // onChange={(e) => setPassword(e.target.value)}
                                />
                                <label htmlFor="floatingPassword">Password</label>
                            </div>

                        
                            <div className="d-grid mt-2">
                                <button
                                    className="btn btn-danger btn-login text-uppercase fw-bold"
                                    type="submit"
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
        </>
    )
}
export default Police_login
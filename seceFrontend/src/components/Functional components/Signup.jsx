import{Link} from 'react-router-dom';

const Signup=()=>{
    return(
        <div style={{ textAlign: "center" }}>
            <h1 >Signup</h1>
            <div className="container">
                <div>
            <label for="username" required>Username: </label>
            <input type="text" id="username" />
            <br /><br />
            <label for="email">Email:  </label>
            <input type="email" id="email" />
            <br /><br />
            <label for="password">Password: </label>
            <input type="password" id="password" />
            <br /><br />
            <Link to="/login"><button>SIGNUP</button></Link>
            </div>
            </div>
        </div>
    )
}
export default Signup;
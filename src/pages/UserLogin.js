import { Link } from 'react-router-dom';
import f from './merkado.png';
import './Pages.css';


function UserLogin(){
  return (
    <div className="container">
    <center>
        <br/>
        <br/>
       <div className="container-form1">
       <center><h1>LOGIN</h1></center>
          <br/>
          <div className="container-form-login">
            <form>
                USERNAME: <input type="text" placeholder="Enter Username" required></input> <br/>
                PASSWORD: <input type="password" placeholder="Password" required></input><br/><br/>

                <center><input type="submit" value=" Login "></input></center>
            </form>

          <br/>
            Don't have account yet? <Link to ='/UserRegistration'>Register here</Link>
          </div>
        </div>
   </center>
    <br/>
    <br/> <br/>
    <br/> <br/>
    <br/>
    </div>
);
}
export default UserLogin;
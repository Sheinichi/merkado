import {Link} from 'react-router-dom';

import classes from './MainNavigation.module.css';


function MainNavigation(){
    return(
    <header className={classes.header}>
    
        <div className={classes.logo}> 
        
        <Link to ='/' >MERKADO</Link>
        
         </div>
         <br/>
        <nav>
            <ul>
                <li>
                   <Link to ='/'></Link>
                </li>
                <li>
                   <Link to ='/products'>Order Products</Link>
                </li>
                <li>
                   <Link to ='/howtopage'>How to Use this App</Link>
                </li>
                <li>
                   <Link to ='/howtopage'>About Us</Link>
                </li>
                <li></li>
               
            </ul>
        
        
        </nav>
    

    </header>
    );
}

export default MainNavigation;
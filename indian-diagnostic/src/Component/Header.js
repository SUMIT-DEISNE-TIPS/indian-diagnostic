import React from 'react'
import logo from "../assets/Logo.png";
import phone from "../assets/Phone.png";
import { Switch, Route, Link } from 'react-router-dom';
import About from '../Pages/About';
import Home from '../Pages/Home';
import Service from '../Pages/Service';
import Contact from '../Pages/Contact';


function Header() {
    return (
        <>
            <div class="head">

                <div class="nav">
                    <div class="nav_icon">
                        <a href="#"> <img src={logo} alt="Logo" /></a>
                    </div>
                    <div class="nav_list">

                        <li>
                            <Link exact activeClassName="active" to="/Home">Home</Link>
                        </li>
                        <li>
                            <Link exact activeClassName="active" to="/About">About</Link>
                        </li>
                        <li>
                            <Link exact activeClassName="active" to="/Service">Service</Link>
                        </li>
                        <li>
                            <Link exact activeClassName="active" to="/Contact">Contact</Link>
                        </li>

                    </div>
                    <div class="nav_contact">
                        <div><img src={phone} alt="" /></div>
                        <div class="phno">
                            <span>9748383835 (Atanu)</span>
                            <span>9748383135 (Lab)</span>
                        </div>
                    </div>
                </div>
                <div class="search">
                    <div class="book">
                        <button class="btn btn_test" data-target="#book_from" data-toggle="test_book_from">Book Test</button>
                    </div>
                    <div class="search_test">
                        <input type="text" name="P_Name" id="" Placeholder="Search For Test and Packeges" />
                        <button type="submit" class="search_btn" name="" id="" value=""><i class="fas fa-search"></i></button>
                    </div>
                </div>



            </div>

            <Switch>
                <Route exact path="/Home" component={Home} />
                <Route exact path="/About" component={About} />
                <Route exact path="/Contact" component={Contact} />
                <Route exact path="/Service" component={Service} />
            </Switch>

        </>
    )
}

export default Header;


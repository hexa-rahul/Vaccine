// Dashboard.js
import React, { useContext } from 'react'
import Footer from '../../common/Footer';
import Navbar from '../../common/Navbar';
import Sidebar from '../../common/Sidebar';
import Home from './Home';
import AuthContext from '../../../context/authContext'; // Import the context
// import { AuthSession } from '../../../context/authSession'; // Import if needed

const Dashboard = ({ username, onLogout }) => {

    const session = useContext(AuthContext); // Use useContext hook to access the context value

    console.log(session)

    return (
        <div id="wrapper">
            <Sidebar />

            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    {/* <AuthSession>
                        {session.token}
                    </AuthSession> */}
                    {/* <button onClick={onLogout}>Logout</button> */}
                    {/* <p><Link to={'/login'}>Login</Link> </p> */}
                    <Navbar />
                    <Home />
                </div>
                <Footer />
            </div>

        </div>
    );
}

export default Dashboard;

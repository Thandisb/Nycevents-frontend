import * as FaIcons from "react-icons/fa";


export default function Footer(){
    return(
        <footer className="footer">
        <div className="footer-logo">
             NYC Event App{" "}
             <img src='https://c8.alamy.com/comp/MB8JC7/line-icon-style-new-york-city-skyline-vector-illustration-MB8JC7.jpg' 
                  style={{height: '20px'}}
                  alt='nyc-skyline'
                 />

        </div>
        <div className="footer-copy">{" "} &copy; 2023 NYC Events App - All right reserved
        </div>
        <div className="footer-social">
            <div className="footer-icon-group">
                <FaIcons.FaFacebook className="footer-icon"/>
            </div>
            <div className="footer-icon-group">
                <FaIcons.FaTwitter className="footer-icon"/>
            </div>
            <div className="footer-icon-group">
                <FaIcons.FaInstagram className="footer-icon"/>
            </div>
            <div className="footer-icon-group">
                <FaIcons.FaLinkedin className="footer-icon"/>
            </div>
            <div className="footer-icon-group">
                <FaIcons.FaGithub className="footer-icon"/>
            </div>
        </div>

        

        </footer>
    )
}
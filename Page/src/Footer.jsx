import utadlogo from './assets/utadLogo.png'
function Footer(){
    return (
        <div className="Footer">
            <hr></hr>
            <h2 className="footerheader">WildLeaf</h2>
            <p>Project made in U-tad</p>
            <ul className="footerList">
                <li className="footerItem">Contact</li>
                <li className="footerItem">About us</li>
                <li className="footerItem">Collaborators</li>
            </ul>
            <img src={utadlogo} className="footerlogo"></img>
        </div>
    );
}
export default Footer
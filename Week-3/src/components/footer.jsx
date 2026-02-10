const Footer = (props) => {
    return ( 
        <footer>
            <p> Author {props.authorName} &copy; {Date()}</p>
        </footer>
     );
}
 
export default Footer;
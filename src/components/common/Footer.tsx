import Paper from '@material-ui/core/Paper';

const Footer = () => {
    return (
        <div style={{ 
            marginTop: 12,
            paddingLeft: "10vw",
            paddingRight: "10vw",
            height: "100%",
            backgroundColor: "#424242",
        }}>
            <Paper style={{ textAlign: "center", padding: "10px" }}>COPYRIGHT 2021</Paper>
        </div>
    );
}

export default Footer;
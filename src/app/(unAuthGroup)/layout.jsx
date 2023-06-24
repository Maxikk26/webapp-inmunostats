export default function UnAuthLayout({children}){
    return (
        <div style={styles}>
            {children}
        </div>
    )
}

const styles = {
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    height:"100vh",
    backgroundColor: " rgb(147,183,227)",
    background: "linear-gradient(360deg, rgba(147,183,227,1) 0%, rgba(64,143,241,1) 100%)"
    /*backgroundImage:`url(/img/pexels-burak-the-weekender.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',*/
}
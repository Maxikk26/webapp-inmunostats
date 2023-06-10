export default function UnAuthLayout({children}){
    return (
        <div style={styles}>
            {children}
        </div>
    )
}

const styles = {
    height:"100vh",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
}
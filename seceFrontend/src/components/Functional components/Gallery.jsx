const Gallery = (props) =>{
    return(
        <div style={{textAlign:"center"}}>
            <h2>{props.page} Page</h2>
            <img src="./src/assets/logo.png" alt="SECE LOGO"/>
            <h2>The image is {props.image}</h2>
        </div>
    )
}
export default Gallery;
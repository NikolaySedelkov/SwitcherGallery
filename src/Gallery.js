function Gallery({data}){
    return(
        <div id="gallery__App">
        {
            data.map(img => <img key={img["id"]} src={img["picture"]}/>)
        }
        </div>
    )
}
export default Gallery;
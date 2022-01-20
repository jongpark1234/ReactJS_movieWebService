import propTypes from "prop-types"
function MovieInfo({ coverImg, title, uploaded, downloadCount }) {
    return (
        <div>
            <img src={coverImg} alt={title}/>
            <h1>{title}</h1>
            <h2>Uploaded : {uploaded}</h2>
            <h2>download count : {downloadCount}</h2>
            
        </div>
    )
}

MovieInfo.propTypes = {
    coverImg: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    uploaded: propTypes.string.isRequired,
    downloadCount: propTypes.number.isRequired,
}

export default MovieInfo
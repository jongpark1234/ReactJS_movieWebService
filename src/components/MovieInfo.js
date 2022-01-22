import propTypes from "prop-types"
function MovieInfo({ coverImg, title, uploaded, downloadCount, genres, summary }) {
    return (
        <div>
            <img src={coverImg} alt={title}/>
            <h1>{title}</h1>
            <h2>Uploaded : {uploaded}</h2>
            <h2>download count : {downloadCount}</h2>
            <h2>Genres : </h2>
            <ul>
                <li>
                    {genres.map(g => <li key={g}><h3>{g}</h3></li>)}
                </li>
            </ul>
            <h2>Summary : </h2>
            <h3>{summary}</h3>
            
        </div>
    )
}

MovieInfo.propTypes = {
    coverImg: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    uploaded: propTypes.string.isRequired,
    downloadCount: propTypes.number.isRequired,
    genres: propTypes.arrayOf(propTypes.string).isRequired,
    summary: propTypes.string.isRequired,
}

export default MovieInfo
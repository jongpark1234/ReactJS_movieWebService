function Movie({coverImg, title, summary, genres}) {
    return (
        <div>
            <img src={coverImg} alt={title}/>
            <h2>{title}</h2>
            <p>{summary}</p>
            <ul>
                <li>
                    {genres.map(g => <li key={g}>{g}</li>)}
                </li>
            </ul>
        </div>
    )
}

export default Movie
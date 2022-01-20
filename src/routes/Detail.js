import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import MovieInfo from '../components/MovieInfo'
function Detail() {
    const [loading, setLoading] = useState(true)
    const [infos, setInfos] = useState([])
    const { id } = useParams()
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json()
        setInfos(json.data)
        setLoading(false)
    }
    useEffect(() => {getMovie()}, [])
    console.log(infos)
    return (
        <div>
            {loading ? (
            <h1>Loading...</h1>
            ) : (
            <div>
                <MovieInfo
                    title={infos.movie.title}
                    coverImg={infos.movie.medium_cover_image}
                    uploaded={infos.movie.date_uploaded}
                    downloadCount={infos.movie.download_count}
                />
            </div>
            )}
        </div>
    )
}

export default Detail
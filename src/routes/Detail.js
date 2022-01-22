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
        setInfos(json.data.movie)
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
                    title={infos.title}
                    coverImg={infos.medium_cover_image}
                    uploaded={infos.date_uploaded}
                    downloadCount={infos.download_count}
                    genres={infos.genres}
                    summary={infos.description_intro}
                />
            </div>
            )}
        </div>
    )
}

export default Detail
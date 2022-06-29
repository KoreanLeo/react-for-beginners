import proTypes from "prop-types";
import {Link} from "react-router-dom"

function Movie({id, coverImg, title, summary, genres}){
    return <div >
    <img alt="img" src={coverImg}/>
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
    <p>{summary}</p>
    <ul>
    {genres.map((g)=>(
      <li key={g}>{g}</li>
    ))}
    </ul>
  </div>;
}

Movie.proTypes={
    id:proTypes.number.isRequired,
    coverImg:proTypes.string.isRequired,
    title:proTypes.string.isRequired,
    summary:proTypes.string.isRequired,
    genres:proTypes.arrayOf(proTypes.string).isRequired,
}
export default Movie;
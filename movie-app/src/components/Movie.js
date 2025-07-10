import PropTypes from "prop-types";

function Movie({coverImg, title, overview}) {
    return (
        <div>
          <img src={coverImg} />
          <h2>{title}</h2>
          <p>{overview}</p>
        </div>
    );
}

Movie.propTypes = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired
}

export default Movie;
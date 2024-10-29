import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux';

const Genres = ({ data }) => {
    const { genres } = useSelector((state) => state.home);
    return (
        <div className="genres">
            {data?.map((g) => {
                if (!genres[g]?.name) return;
                return (
                    <div key={g} className="genre">
                        {genres[g]?.name}
                    </div>
                );
            })}
        </div>
    );
}

Genres.propTypes = {
    data: PropTypes.array,
    genres: PropTypes.object
}

export default Genres;
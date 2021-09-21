import React  from 'react';

import { Link } from 'react-router-dom';

import { Image }  from './Thumb.styles';

type Props = {
    image: string;
    movieId: number;
    clicker: boolean;
}

const Thumb: React.FC<Props> = ({image, movieId, clicker})=> {
    return (
        <div>
            { clicker ? 
                (
                    <Link to={`/${movieId}`}>
                        <Image src={image} alt='movie-thumb' />
                    </Link>
                ): (
                    <Image src={image} alt='movie-thumb' />
                ) 
            }
        </div>

    )
}



// Thumb.propTypes = {
//    image: PropTypes.string,
//    movieId: PropTypes.number,
//    clickable: PropTypes.bool 
// }

export default Thumb;
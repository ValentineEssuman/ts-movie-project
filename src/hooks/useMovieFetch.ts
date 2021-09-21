import { useState, useEffect } from "react";

import API, { Movie, Cast, Crew, Credits} from '../API';
import { isPersistedState } from "../helpers";


export type MovieState = Movie & { actors: Cast[]; directors: Crew[]};

export const useMovieFetch = (movieId : string | any)=> {
    const [state, setState] = useState<MovieState>({} as MovieState);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(()=> {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(false);


                const movie: Movie = await API.fetchMovie(movieId);
                const credits: Credits = await API.fetchCredits(movieId);

                console.log("movie", movie);
                console.log("credits", credits); 
    
                //c
            
                const directors = credits.crew.filter( person => person.job ==='Director');
                console.log("directors", directors);
                setState({
                    ...movie,
                    actors: credits.cast,
                    directors
                });
                setLoading(false);

            } catch (error:any) {
                console.log(error.message)
                setError(true);
            }
        };

        const sessionState = isPersistedState(movieId.t);
        if(sessionState){
            setState(sessionState);
            setLoading(false);
            return;

        }

        fetchData();
    }, [movieId]);


    useEffect(()=>{
        sessionStorage.setItem(movieId.toString(), JSON.stringify(state));
    },[movieId,state]);

    return { state, loading, error}

}
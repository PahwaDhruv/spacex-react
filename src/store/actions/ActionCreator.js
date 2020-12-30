import axios from 'axios';

export const IS_LOADING = 'is_loading';
export const FETCH_PROGRAMS = 'fetch_programs';

export const fetchPrograms = () => async dispatch =>{
    dispatch({type : IS_LOADING});
    const res = await axios.get('https://api.spaceXdata.com/v3/launches?limit=100');
    dispatch({
        type : FETCH_PROGRAMS,
        payload : res.data
    });
};
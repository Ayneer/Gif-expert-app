import React from 'react';
import PropTypes from 'prop-types';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    const { loading, data } = useFetchGifs(category);


    return (
        <>
            <h3 className='animate__animated animate__zoomIn'>{category}</h3>
            {loading && 'Loading...'}
            <div className='card-grid'>
                {data.map(gif => (
                    <GifGridItem
                        key={gif.id}
                        {...gif}
                    />
                ))}
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

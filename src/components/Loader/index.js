import React from 'react';
import loaderSrc from '../../assets/loading.gif';

const Loader = props => (
    <div>
        <img 
            style={{width: 100}}
            alt="Loading"
            src={loaderSrc} />

    </div>
)

export default Loader;
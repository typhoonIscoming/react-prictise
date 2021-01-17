import React from 'react';

import './tseJoke.scss';

export function tseJoke(props) {
    return (
        <div className={['tse-joke-container', props.className].join(' ')}>
            <div dangerouslySetInnerHTML={{__html: 'First &middot; Second'}} />
        </div>
    )
}

import { useContext, useEffect, useState } from 'react';
import { Context } from '../../App';

import React from 'react'

export const Route = ({ path, children }:any) => {
    const { url } = useContext(Context);
    
    // state to track URL and force component to re-render on change
    // const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        // define callback as separate function so it can be removed later with cleanup function
        const onLocationChange = () => {
            // update path state to current window URL
            // setCurrentPath(window.location.pathname);
        }

        // listen for popstate event
        window.addEventListener('popstate', onLocationChange);

        // clean up event listener
        return () => {
            window.removeEventListener('popstate', onLocationChange)
        };
    }, [])

    return url === path
    ? children
    : null;
}

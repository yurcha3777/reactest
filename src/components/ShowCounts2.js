import React from 'react';
import {useSelector} from "react-redux";

const ShowCounts2 = () => {
    const {count2} = useSelector(state => state.count2Reducer);
    return (
        <div>
            <h2>B:{count2}</h2>
        </div>
    );
};

export {
    ShowCounts2
};

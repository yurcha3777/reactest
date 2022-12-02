import React from 'react';
import {useSelector} from "react-redux";

const ShowCounts = () => {
    const {count1} = useSelector(state => state.count1Reducer);
    return (
        <div>
            <h2>A:{count1}</h2>
        </div>
    );
};

export {
    ShowCounts
};

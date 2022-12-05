import React from 'react';

import {useDispatch} from "react-redux";

import {count2Actions} from "../redux/slices";

const Count2Tools = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => dispatch(count2Actions.inc())}>inc</button>
            <button onClick={() => dispatch(count2Actions.dec())}>dec</button>
            <button onClick={() => dispatch(count2Actions.reset())}>dec</button>
        </div>
    );
};

export {
    Count2Tools
};

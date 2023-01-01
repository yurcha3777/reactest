import React from "react";
import FirstName from "./FirstName";
import LastName from "./LastName";

const User = () => {
    return (
        <div>
            <input
                type='text'
                placeholder='First Name'
            />
            <input
                type='text'
                placeholder='Second Name'
            />
            <div>
                <div>
                    <div>First Name:</div>
                    <div>
                        <FirstName/>
                    </div>
                </div>

                <div>
                    <div>Last Name:</div>
                    <div>
                        <LastName/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default User;
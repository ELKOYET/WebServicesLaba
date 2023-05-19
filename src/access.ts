import React from "react"

export default function (initialState) {
    //const { userId, role } = initialState;
    const token = React.useMemo(()=> localStorage.getItem('token'),[initialState])

    return {
        isUser: (token ? true : false)

    }
};

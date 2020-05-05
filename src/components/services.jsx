import React from "react"

const Services = ({ serviceId, name, getProviders }) => {
    return (
        <ul>
            <li>
                <a onClick={() => getProviders(name)}>{name}</a>
            </li>
        </ul>
    )
}

export default Services
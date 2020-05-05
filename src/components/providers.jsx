import React from "react"

const Providers = ({ providerId, name, imageUrl, subSpecialities }) => {
    return (
        <React.Fragment>
            <div style={{ margin: "5%" }}>
                <img src={imageUrl} alt="image"></img>

                <h3 style={{ display: "inline" }}>{name}</h3><br />

                {subSpecialities && subSpecialities.map(subSpeciality => (
                    <li key={subSpeciality}>{subSpeciality}</li>
                ))}
            </div>

        </React.Fragment>
    )
}

export default Providers
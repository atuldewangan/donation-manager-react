import React, { useState } from 'react'
import FoundationForm from './FoundationForm'
import FoundationListingV2 from './FoundationListingV2'

const Foundation = props => {
    const [reload, setReload] = useState(false)
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            // background: "red",
            justifyContent: "center",
            alignItems: "center",
            // alignContent: "center",
            margin: 50,
            width: "100%",
            height: "100%",

            // flex: 1


        }}>
            <FoundationForm setReload={setReload} />
            <div style={{ backgroundColor: "black", width: "100%", height: 1, marginRight: 100, marginBottom: 50 }} />
            <FoundationListingV2 reload={reload} setReload={setReload} />


        </div>
    )
}


export default Foundation
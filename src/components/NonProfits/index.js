import React, { useState } from 'react'
import NonProfitForm from './NonProfitForm'
import ProfitListingV2 from './ProfitListingV2'

const Nonprofit = props => {
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
            <NonProfitForm setReload={setReload} />
            <div style={{ backgroundColor: "black", width: "100%", height: 1, marginRight: 100, marginBottom: 50 }} />

            <ProfitListingV2 reload={reload} setReload={setReload} />

        </div>
    )
}

Nonprofit.propTypes = {}

export default Nonprofit
import React from "react";

import './Repertory.scss'
import HeaderApp from "../../utils/HeaderApp";
import AppContainer from "../../utils/AppContainer";

const headerColor = "#b30000"

const Repertory: React.FC = () => {
    return (
        <AppContainer>
            <HeaderApp color={headerColor} title="Repertory" />

        </AppContainer>
    )
};

export default Repertory;

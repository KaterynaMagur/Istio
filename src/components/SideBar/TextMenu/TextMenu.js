import React from 'react';
import List from "@mui/material/List";

import IncomeMenu from "../IncomeMenu/IncomeMenu";
import RetailMenu from "../RetailMenu/RetailMenu";
import PurposesMenu from "../PurposesMenu/PurposesMenu";

const TextMenu = () => {

    return (
        <List sx={{
            width: '100%',
        }}>
            <IncomeMenu/>
            <RetailMenu/>
            <PurposesMenu/>
        </List>
    );
};

export default TextMenu;
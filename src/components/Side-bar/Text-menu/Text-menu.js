import React from 'react';
import List from "@mui/material/List";

import IncomeMenu from "../Income-menu/Income-menu";
import RetailMenu from "../Retail-menu/Retail-menu";
import PurposesMenu from "../Purposes-menu/Purposes-menu";

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
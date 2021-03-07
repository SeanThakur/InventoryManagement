import React from 'react'
import './Slidebar.css';

import ListIcon from '@material-ui/icons/List';
import AddIcon from '@material-ui/icons/Add';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import ViewWeekIcon from '@material-ui/icons/ViewWeek';

import SlidebarOption from '../SlidebarOption/SlidebarOption'

const Slidebar = () => {
    return (
        <div className="slidebar">
            <div className="slidebar__header">
                <h2>Inventory</h2>
            </div>
            <div className="sidebar__line"></div>
            <SlidebarOption name="List Products" Icon={ListIcon} path="/all_products"/>
            <SlidebarOption name="Add Products" Icon={AddIcon} path="/add_product"/>
            <SlidebarOption name="Add Location" Icon={EditLocationIcon} path="/add_location"/>
            <SlidebarOption name="Add Product Movements" Icon={GroupWorkIcon} path="/add_product_movement"/>
            <SlidebarOption name="View Product Movements" Icon={ViewWeekIcon} path="/view_product_movements"/>
        </div>
    )
}

export default Slidebar
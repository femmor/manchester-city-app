import React from 'react';
import { Link } from "react-router-dom"
import ListItem from "@material-ui/core/ListItem"

const AdminNav = () => {

    const links = [
        {
            title: "Matches",
            linkTo: "/admin_matches"
        },
        {
            title: "Add Match",
            linkTo: "/admin_matches/edit_match"
        },
        {
            title: "Players",
            linkTo: "/admin_players"
        },
        {
            title: "Add Player",
            linkTo: "/admin_players/add_player"
        }
    ]

    const style = {
        color: "#ffffff",
        fontWeight: "300",
        borderBottom: "3px solid #353535" 
    }

    const renderItems = () => (
        links.map(link => (
           <Link to={link.linkTo} key={link.title}>
                <ListItem button style={style}>
                    {link.title}
                </ListItem>
            </Link>
        
        )))

    return (
        <div>
            {renderItems()}
        </div>
    );
}

export default AdminNav;

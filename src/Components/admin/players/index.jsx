import React, { Component } from 'react';
import { Link } from "react-router-dom"
import AdminLayout from "../../../Hoc/AdminLayout"

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';

import { firebasePlayers } from "../../../firebase"
import {firebaseLooper, reverseArray} from "../../ui/misc"

class AdminPayers extends Component {

    state = {
        isloading: true,
        players: [],
    }

    componentDidMount() {
        firebasePlayers
        .once("value")
        .then((snapshot) => {
            const players = firebaseLooper(snapshot)
            
            this.setState({
                isloading: false,
                players: reverseArray(players)
            })
        })

    }

    render() {
        
        return (
            <AdminLayout>
                <div>
                    <Paper>
                        <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>First Name</TableCell>
                                    <TableCell>Last Name</TableCell>
                                    <TableCell>Shirt Number</TableCell>
                                    <TableCell>Position</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    this.state.players ? 
                                    this.state.players.map((player, index) => (
                                        <TableRow key={index}>
                                            <TableCell>
                                                <Link to={`/admin_players/edit_players/${player.id}`}>{player.name}</Link>
                                            </TableCell>
                                            <TableCell>
                                                <Link to={`/admin_players/edit_players/${player.id}`}>{player.lastname}</Link>
                                            </TableCell>
                                            <TableCell>
                                                {player.number}
                                            </TableCell>
                                            <TableCell>
                                                {player.position}
                                            </TableCell>
                                        </TableRow>
                                    ))
                                    : null
                                }
                            </TableBody>
                        </Table>
                        </TableContainer>
                    </Paper>
                    <div className="admin_progress">
                        {
                            this.state.isloading ? <CircularProgress thickness={5} style={{
                                color: "#6eaddd"
                            }}/> : null
                        }
                    </div>
                </div>
            </AdminLayout>
        );
    }
}

export default AdminPayers;
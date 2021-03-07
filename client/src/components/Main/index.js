import React from 'react'
import './Main.css'
import Header from '../Header'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
import IconButton from '@material-ui/core/IconButton';


const Index = () => {
    return (
        <div className="main">
            <Header title="All Products" />
            <div className="main__table">
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>
                                <h2>Product Name</h2>
                            </TableCell>
                            <TableCell align="right">
                                <h2>Edit</h2>
                            </TableCell>
                            <TableCell align="right">
                                <h2>View</h2>
                            </TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell component="th" scope="">
                                    Amazon
                                </TableCell>
                                <TableCell align="right">
                                    <IconButton>
                                        <EditIcon />
                                    </IconButton>
                                </TableCell>
                                <TableCell align="right">
                                    <IconButton>
                                        <VisibilityIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}

export default Index

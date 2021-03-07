import React from 'react'
import './ViewProductMovement.css'
import Header from '../Header'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const Index = () => {
    return (
        <div className="ViewProductMovement">
            <Header title="All Products Movements" />
            <div className="ViewProductMovement__body">
                <TableContainer component={Paper}>
                    <Table className="ViewProductMovement__table">
                        <TableHead>
                        <TableRow>
                            <TableCell>
                                <h2>Product</h2>
                            </TableCell>
                            <TableCell>
                                <h2>Warehouse</h2>
                            </TableCell>
                            <TableCell>
                                <h2>Qty</h2>
                            </TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell component="th" scope="">
                                    Product Name
                                </TableCell>
                                <TableCell>
                                   warehouse Location
                                </TableCell>
                                <TableCell>
                                   5
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
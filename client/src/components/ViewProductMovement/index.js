import React , {useEffect} from 'react'
import './ViewProductMovement.css'
import Header from '../Header'
import Loading from '../Loading'
import {useDispatch,useSelector} from 'react-redux';
import {getAllMovements} from '../../store/feature/ProductMovement/actions'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const Index = () => {

    const dispatch = useDispatch();
    const productMovement = useSelector(state => state.productMovement);

    useEffect(() => {
        dispatch(getAllMovements());
;    }, [dispatch]);

    return (
        <div className="ViewProductMovement">
            <Header title="All Products Movements" />
            {
                productMovement.loading ? (
                    <Loading />
                ) : (
                    <>
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
                                        {
                                            productMovement?.movements?.map(m => (
                                                <TableRow key={m.id}>
                                                    <TableCell component="th" scope="">
                                                        {m.name}
                                                    </TableCell>
                                                    <TableCell>
                                                        {m.from_location.length === 0 && m.to_location}
                                                        {m.to_location.length === 0 && m.from_location}
                                                        {
                                                           m.from_location.length > 0 && m.to_location.length > 0 && 
                                                               m.from_location.concat(' - ' + m.to_location)
                                                           
                                                        }
                                                    </TableCell>
                                                    <TableCell>
                                                        {m.qty}
                                                    </TableCell>
                                                </TableRow>
                                            ))
                                        }
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default Index
import React , {useState, useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom'
import './AddProductMovement.css'
import Header from '../Header'
import {getAllProducts} from '../../store/feature/Product/actions'
import {addMovement} from '../../store/feature/ProductMovement/actions'
import Loading from '../Loading'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Index = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const product = useSelector(state => state.product);

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);

    const [qty, setQty] = useState(0);
    const [details, setDetails] = useState([]);
    const [detailsMoveOut, setDetailsMoveOut] = useState([]);
    const [fromLocation, setFromLocation] = useState('');
    const [toLocation, setToLocation] = useState('');

    const handleChange = (event) => {
        setQty(event.target.value);
    };

    const handleFromChange = (event) => {

        setFromLocation(event.target.value);
        setToLocation('');

    };

    const handleToChange = (event) => {

        setToLocation(event.target.value);
        setFromLocation('');

    };

    const handleMoveInChange = (name) => {

        const shownState = details.slice();

        const index = shownState.indexOf(name);

        if(index >= 0)
        {
            shownState.splice(index, 1);
            setDetails(shownState)
        }else {
            shownState.push(name);
            setDetails(shownState);
        }

    };

    const handleMoveOutChange = (name) => {
        const shownState = detailsMoveOut.slice();

        const index = shownState.indexOf(name);

        if(index >= 0)
        {
            shownState.splice(index, 1);
            setDetailsMoveOut(shownState)
        }else {
            shownState.push(name);
            setDetailsMoveOut(shownState)
        }

    };

    const submitHandler = (e, p_id) => {
        e.preventDefault();
        const data = {
            qty,
            from: fromLocation,
            to: toLocation,
            product_id: p_id
        }
        dispatch(addMovement(data));
        history.push('/view_product_movements')
    }

    return (
        <div className="ProductMovement">
            <Header title="Add Product Movements" />
            {
                product.loading ? <Loading /> : (
                    <>
                        <div className="ProductMovement__attach">
                            {
                                product?.products?.map((p,i) => (
                                    <div className="ProductMovement__body" key={p.id}>
                                        <Card className="ProductMovement__card">
                                            <div className="ProductMovement__card__header">
                                                <CardContent>
                                                    <Typography variant="body2" color="textSecondary">
                                                        <h2>{p.name}</h2>
                                                    </Typography>
                                                </CardContent>
                                                <form>
                                                    <input
                                                        type="number"
                                                        placeholder="Qty"
                                                        value={p.id[i] && qty}
                                                        onChange={handleChange}
                                                    />
                                                </form>
                                            </div>
                                            <div className="ProductMovement__card__footer">
                                                <CardActions>
                                                    <Button variant="outlined" onClick={() => handleMoveInChange(p.name)}>
                                                        Move In
                                                    </Button>
                                                    <Button variant="outlined" style={{marginLeft: '1.2rem'}} onClick={() => handleMoveOutChange(p.name)}>
                                                        Move Out
                                                    </Button>
                                                </CardActions>
                                            </div>
                                            {
                                                details.includes(p.name) && (
                                                    <div className="ProductMovement__card__Move"> 
                                                        <h2>From :</h2>
                                                        <form onSubmit={(e) => submitHandler(e,p.id)}>
                                                            <input 
                                                                type="text"
                                                                value={fromLocation}
                                                                onChange={handleFromChange}
                                                                placeholder="Enter Move In Location"
                                                            />
                                                        </form>
                                                    </div>
                                                )
                                            }
                                            {
                                                detailsMoveOut.includes(p.name) && (
                                                    (
                                                        <div className="ProductMovement__card__Move"> 
                                                            <h2>To :</h2>
                                                            <form onSubmit={(e) => submitHandler(e,p.id)}>
                                                                <input 
                                                                    type="text"
                                                                    value={toLocation}
                                                                    onChange={handleToChange}
                                                                    placeholder="Enter Move Out Location"
                                                                />
                                                            </form>
                                                        </div>
                                                    )
                                                )
                                            }
                                        </Card>
                                    </div>
                                ))
                            }
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default Index

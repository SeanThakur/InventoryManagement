import React , {useState, useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom'
import './AddProductMovement.css'
import Header from '../Header'
import {getAllProducts} from '../../store/feature/Product/actions'
import {addMovement} from '../../store/feature/ProductMovement/actions'
import {getAllLocations} from '../../store/feature/Location/actions'
import Loading from '../Loading'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

const Index = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const product = useSelector(state => state.product);
    const location = useSelector(state => state.location);

    useEffect(() => {
        dispatch(getAllProducts());
        dispatch(getAllLocations());
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

    const MoveInSubmitHandler = (e, p_id) => {
        e.preventDefault();
        const data = {
            qty,
            product_id: p_id,
            location_id: fromLocation
        }

        dispatch(addMovement(data));
        history.push('/view_product_movements')
    }
    const MoveOutSubmitHandler = (e, p_id) => {
        e.preventDefault();
        const data = {
            qty,
            product_id: p_id,
            location_id: toLocation
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
                                                details.includes(p.name)&& (
                                                    <div className="ProductMovement__card__Move"> 
                                                        <h2>Move In :</h2>
                                                        <FormControl className="ProductMovement__card__formControl">  
                                                            <InputLabel>In</InputLabel>
                                                            <Select
                                                                labelId="demo-simple-select-label"
                                                                id="demo-simple-select"
                                                                value={p.id[i] && fromLocation}
                                                                onChange={handleFromChange}
                                                            >
                                                            {
                                                                location?.loading ? (
                                                                    <MenuItem>Loading</MenuItem>
                                                                ) : location?.locations?.map(location => (
                                                                    <MenuItem value={location.id} key={location.id}>{location.location_description}</MenuItem>
                                                                ))
                                                            }
                                                            </Select>
                                                        </FormControl>
                                                        <Button className="ProductMovement__card__Button" variant="outlined" onClick={(e) => MoveInSubmitHandler(e,p.id)}>In</Button>
                                                    </div>
                                                )
                                            }
                                            {/* details.includes(p.name) */}
                                            {
                                                detailsMoveOut.includes(p.name) && (
                                                    (
                                                        <div className="ProductMovement__card__Move"> 
                                                            <h2>Move Out :</h2>
                                                            <FormControl className="ProductMovement__card__formControl">
                                                                <InputLabel>Out</InputLabel>
                                                                <Select
                                                                    labelId="demo-simple-select-label"
                                                                    id="demo-simple-select"
                                                                    value={p.id[i] && toLocation}
                                                                    onChange={handleToChange}
                                                                >
                                                                {
                                                                    location?.loading ? (
                                                                        <MenuItem>Loading</MenuItem>
                                                                    ) : location?.locations?.map(location => (
                                                                        <MenuItem value={location.id} key={location.id}>{location.location_description}</MenuItem>
                                                                    ))
                                                                }
                                                                </Select>
                                                            </FormControl>
                                                            <Button className="ProductMovement__card__Button" variant="outlined" onClick={(e) => MoveOutSubmitHandler(e,p.id)}>Out</Button>
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

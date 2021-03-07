import React , {useState} from 'react'
import './AddProductMovement.css'
import Header from '../Header'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Index = () => {

    const [qty, setQty] = useState(0);
    const [moveExpanded, setMoveExpanded,] = useState(false);
    const [moveOutExpanded, setMoveOutExpanded,] = useState(false);

    const handleChange = (event) => {
        setQty(event.target.value);
    };

    const handleMoveInChange = () => {
        setMoveExpanded(!moveExpanded);
        setMoveOutExpanded(false);
    };

    const handleMoveOutChange = () => {
        setMoveOutExpanded(!moveOutExpanded);
        setMoveExpanded(false);
    };
    return (
        <div className="ProductMovement">
            <Header title="Add Product Movements" />
            <div className="ProductMovement__attach">
                <div className="ProductMovement__body">
                    <Card className="ProductMovement__card">
                        <div className="ProductMovement__card__header">
                            <CardContent>
                                <Typography variant="body2" color="textSecondary">
                                    <h2>Product Name</h2>
                                </Typography>
                            </CardContent>
                            <form>
                                <input
                                    type="number"
                                    placeholder="Qty"
                                    value={qty}
                                    onChange={handleChange}
                                />
                            </form>
                        </div>
                        <div className="ProductMovement__card__footer">
                            <CardActions>
                                <Button variant="outlined" onClick={handleMoveInChange}>
                                    Move In
                                </Button>
                                <Button variant="outlined" style={{marginLeft: '1.2rem'}} onClick={handleMoveOutChange}>
                                    Move Out
                                </Button>
                            </CardActions>
                        </div>
                        {
                            moveExpanded && (
                                <div className="ProductMovement__card__Move"> 
                                    <h2>From :</h2>
                                    <input 
                                        type="text"
                                        placeholder="Enter Move In Location"
                                    />
                                </div>
                            )
                        }
                        {
                            moveOutExpanded && (
                                (
                                    <div className="ProductMovement__card__Move"> 
                                        <h2>To :</h2>
                                        <input 
                                            type="text"
                                            placeholder="Enter Move Out Location"
                                        />
                                    </div>
                                )
                            )
                        }
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Index

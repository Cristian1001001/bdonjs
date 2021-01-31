import React from 'react'
import {Container} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import './shoppingCart.style.css';
import {changeValue, shopCart} from "../redux/actions/cart";

export const ShoppinCart= () =>{
    const dispatch = useDispatch()
    const {data} = useSelector(state=> state.cart)
    const increase = async (id,value) =>{
        await dispatch(changeValue(id,value,data[0].userId))
        dispatch(shopCart())
    }
    const decrease = async (id,value) =>{
        await dispatch(changeValue(id,value,data[0].userId))
        dispatch(shopCart())
    }
    let dis
    return(
        <Container>
            <div className='cart-container'>
                {data.map(item=>
                    <div key={item.productId.toString()} className='cart-item'>
                        <div className='cart-image'>
                            {/*<img src={} alt=''/>*/}
                        </div>
                        <div className='cart-name'>
                            <p>{item.productName}</p>
                        </div>
                        <div>
                            <p>{item.productPrice}</p>
                        </div>
                        <div className='cart-quantity'>
                            {dis= (item.quantity <= 1)}
                            <button
                                style={{marginTop:'10px', marginRight: '10px'}}
                                className="btn-floating btn-small waves-effect waves-light teal"
                                id={item.productId.toString()}
                                disabled={dis}
                            value={-1}
                                onClick={e=>decrease(e.target.id, e.target.value)}
                            >-</button>
                            <p>{item.quantity}</p>
                            <button
                                style={{marginTop:'10px', marginLeft: '10px'}}
                                className="btn-floating btn-small waves-effect waves-light teal"
                                id={item.productId.toString()}
                            value='1'
                                onClick={e =>increase(e.target.id, e.target.value)}
                            >+</button>
                        </div>
                        <div>
                            <p>{(item.quantity*item.productPrice).toFixed(2)}</p>
                        </div>
                    </div>
                )
                }
            </div>
        </Container>
    )
}

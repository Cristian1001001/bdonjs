import React from 'react'
import './rest-card.css'
import {useDispatch, useSelector} from "react-redux";
import {changeValue} from "../../redux/actions/cart";

export const CardTemplate = ({name, image, price, id}) =>{
    const dispatch = useDispatch()
    const {data} = useSelector(state=>state.auth)
    const addToCart = async (id,value) =>{
       await dispatch(changeValue(id,value,data.userId))
        alert('Added')
    }
    return(
        <>
            <div key={id.toString()} className="card" >
                <div className="card-image">
                    <img src={image}  alt=''/>
                </div>
                <div className="contentul">
                    <div>
                    <p className="title">{name}</p>
                    </div>
                    {!!price ?
                        <div>
                        <p className="card-price">{price}</p>
                        <div className='card-add '>
                            <button className='btn blue-grey' onClick={e=> addToCart(id,1)} style={{width: '200px'}}>Add To Cart</button>
                        </div>
                        </div>
                        :
                        null
                    }
                </div>
           </div>
        </>
    )
}

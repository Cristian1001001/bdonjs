import React, {useState, useCallback, useEffect} from 'react';
import {UseHttp} from "../hooks/httpHook";
import {useParams} from 'react-router-dom'
import {CardTemplate} from "../components/res-card/card-template";
import {Loading} from "../components/loader";
import { Row, Col, Container} from "react-bootstrap";
import {useSelector} from "react-redux";

export const Products= () =>{
    const {request, loading} = UseHttp()
    const {search} = useSelector(state=> state.products)
    //Products by restaurant start
    const [products, setProducts] = useState([])
    const productByRest = useParams().rid
    const getProductsByRId = useCallback(async ()=> {

        try {
            if(typeof productByRest !== 'undefined') {

                const fetched = await request(`/api/products/${productByRest}`, 'GET', null, {})
                setProducts(fetched)
            }else{
                const fetched = await request(`/api/products?search=${search}`, 'GET', null, {})
                setProducts(fetched)
            }
        }catch (e) {}

    } ,[request,productByRest,search])

    useEffect(() => {
        getProductsByRId()
    }, [getProductsByRId,search])
    //products by restaurants by restauran final
    return (
        <>
            <Container>
                <Row>
                    {
                        loading
                            ?
                            <Loading/>
                            :
                            products.map( product =>{
                                return(
                                    <Col key={product._id.toString()}>
                                        <CardTemplate
                                                  id={product._id}
                                                  key={product._id}
                                                  name={product.productName}
                                                  image={product.productImage}
                                                  price={product.productPrice}
                                        />
                                    </Col>
                                )
                            })
                    }
                </Row>
            </Container>
        </>
    )
}

import React, {useState, useCallback, useEffect} from 'react';
import {UseHttp} from "../hooks/httpHook";
import {CardTemplate} from "../components/res-card/card-template";
import {Loading} from "../components/loader";
import {Link} from "react-router-dom"
import { Row, Col, Container} from "react-bootstrap";

export const Restaurants= () =>{
    const [restaurants, setRestaurants] = useState([])
    const {request, loading} = UseHttp()
    const getRestaurants = useCallback(async ()=> {

        try {
            const fetched = await request('/api/restaurants', 'GET', null, {})
            setRestaurants(fetched)

        }catch (e) {}

    } ,[request])

     useEffect(() => {
         getRestaurants()
     }, [getRestaurants])


    return (
        <>
            <Container>
                <Row>
                    {
                        loading
                        ?
                        <Loading/>
                        :
                        restaurants.map( restaurant =>{
                            return(
                                <Col key={restaurant._id.toString()} >
                                    <Link to={`/products/${restaurant._id}`}>
                                        <CardTemplate
                                                  id={restaurant._id}
                                                  key={restaurant._id}
                                                  name={restaurant.restName}
                                                  image={restaurant.restImage}
                                                  price={null}
                                        />
                                    </Link>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </>
    )
}

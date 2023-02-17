import React, { useContext } from "react";

import { Button, Offcanvas,  Stack } from "react-bootstrap";

import { items } from "../data";

import WarenKorbContext from "../context/WarenKorbContext";

const WarenKorb = () => {
    const { cart, closeCart,removeKorb ,isOpen } = useContext(WarenKorbContext);
    // const data_Cart = items.filter((item) => cart.includes(item.id));
    const data_Cart = cart.map((cartItem)=>{
        const product=items.find((item)=> item.id === cartItem.id);
        return{
            ...product,
            ...cartItem,
        }
    })
console.log( cart);
    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Warenkorb</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {data_Cart.map((item) => (
                        <Stack
                        key={item.id}
                            direction="horizontal"
                            gap={2}
                            className="d-flex align-items-center"
                        >
                            <img
                                src={item.imgUrl}
                                alt="cart-img"
                                style={{
                                    width: "125px",
                                    height: "75px",
                                    objectFit: "cover",
                                }}
                            />
                            <div className="me-auto">
                                <div>{item.title} </div>
                                <div
                                    className="text-muted"
                                    style={{ fontSize: "0.75rem" }}
                                >
                                    {item.quantity}x {item.price}
                                </div>
                            </div>
                            <div>{item.quantity*item.price}</div>
                            <Button
                                variant="outline-danger"
                                size="sm"
                                onClick={() => removeKorb(item.id)}
                            >
                                &times;
                            </Button>
                        </Stack>
                    ))}
                    <div className="ms-auto fw-bold fs-5">
                        Total:
                        {data_Cart.reduce((total, cartItem) => {
                                return total + cartItem.price * cartItem.quantity;
                            }, 0).toFixed(2)} €
                    </div>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default WarenKorb;

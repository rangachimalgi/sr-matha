import { useContext, useEffect, useState } from "react";
import { DataContainer } from "../App";
import {
  Col,
  Container,
  Row,
  Modal,
  Button,
  InputGroup,
  Form,
} from "react-bootstrap";
import { availablePincodes } from "../components/availablePincodes.js";
import DatePicker from "react-datepicker";
import { format } from 'date-fns';
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const Cart = () => {
  const [showModal, setShowModal] = useState(false);
  const [orderData, setOrderData] = useState({
    name: "",
    email: "",
    address: "",
    phoneno: "",
    age: "",
    gotra: "",
    gender: "",
    date: "",
  });
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const { CartItem, setCartItem, addToCart, decreaseQty, deleteProduct } =
    useContext(DataContainer);
  const totalPrice = CartItem.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );

  const [pincode, setPincode] = useState("");
  const [pincodeMessage, setPincodeMessage] = useState("");

  const checkAvailability = () => {
    if (availablePincodes.includes(pincode)) {
      setPincodeMessage("Service is available in your pincode!");
    } else {
      setPincodeMessage("Sorry, service is not available in your pincode.");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (CartItem.length === 0) {
      const storedCart = localStorage.getItem("cartItem");
      setCartItem(JSON.parse(storedCart));
    }
  }, []);

  const handleSubmitOrder = async () => {
    if (!availablePincodes.includes(pincode)) {
      alert("Service is not available in your pincode.");
      return;
    }

    const orderForm = document.querySelector("form");
    const formData = new FormData(orderForm);

    const orderDetails = {
      pincode: formData.get("pincode"),
      name: formData.get("name"),
      email: formData.get("email"),
      address: formData.get("address"),
      phoneno: formData.get("phoneno"),
      age: formData.get("age"),
      gotra: formData.get("gotra"),
      cartItems: CartItem,
    };

    try {
      const response = await axios.post(
        `http://localhost:8082/api/orders`,
        orderDetails
      );
      if (response.data.success) {
        setCartItem([]);
        handleClose();
        // Navigate to success page or show success message here
      } else {
        // Handle error (e.g., show an error message to the user)
      }
    } catch (error) {
      console.error("Error submitting order:", error);
      // Handle error (e.g., show an error message to the user)
    }
  };

  return (
    <section className="cart-items">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            {CartItem.length === 0 && (
              <h1 className="no-items product">No Sevas selected currently</h1>
            )}
            {CartItem.map((item) => {
              const productQty = item.price * item.qty;
              return (
                <div className="cart-list" key={item.id}>
                  <Row>
                    <Col className="image-holder" sm={4} md={3}>
                      <img src={item.imgUrl} alt="" />
                    </Col>
                    <Col sm={8} md={9}>
                      <Row className="cart-content justify-content-center">
                        <Col xs={12} sm={9} className="cart-details">
                          <h3>{item.productName}</h3>
                          <h4>
                            {`\u20B9${item.price}.00`} * {item.qty}
                            <span>{`\u20B9${productQty}.00`}</span>
                          </h4>
                        </Col>
                        <Col xs={12} sm={3} className="cartControl">
                          <button
                            className="incCart"
                            onClick={() => addToCart(item)}
                          >
                            <i className="fa-solid fa-plus"></i>
                          </button>
                          <button
                            className="desCart"
                            onClick={() => decreaseQty(item)}
                          >
                            <i className="fa-solid fa-minus"></i>
                          </button>
                        </Col>
                      </Row>
                    </Col>
                    <button
                      className="delete"
                      onClick={() => deleteProduct(item)}
                    >
                      <ion-icon name="close"></ion-icon>
                    </button>
                  </Row>
                </div>
              );
            })}
          </Col>
          <Col md={4}>
            <div className="cart-total">
              <h2>Seva Summary</h2>
              {/* <div className=" d_flex">
                <h4>Total Price :</h4>
                <h3>{`\u20B9${totalPrice}.00`}</h3>
              </div> */}
              {/* Styled Checkout Button */}
              <Button
                onClick={handleShow}
                style={{
                  marginTop: "15px",
                  backgroundColor: "#4CAF50",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
                  fontSize: "16px",
                }}
              >
                Enter Seva Details
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      {/* Checkout Form Modal */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Checkout Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formPincode">
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="Enter Pincode"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  name="pincode"
                />
                <Button variant="outline-secondary" onClick={checkAvailability}>
                  Check Availability
                </Button>
              </InputGroup>
              <Form.Text className="text-muted">{pincodeMessage}</Form.Text>
              <br />
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the name"
                value={orderData.name}
                onChange={(e) =>
                  setOrderData((prevState) => ({
                    ...prevState,
                    name: e.target.value,
                  }))
                }
                name="name"
              />{" "}
              {/* added name attribute */}
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter the Devotee Email"
                value={orderData.email}
                onChange={(e) =>
                  setOrderData((prevState) => ({
                    ...prevState,
                    email: e.target.value,
                  }))
                }
                name="email"
              />{" "}
              {/* added name attribute */}
            </Form.Group>
            <Form.Group>
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the Date"
                value={orderData.address}
                onChange={(e) =>
                  setOrderData((prevState) => ({
                    ...prevState,
                    address: e.target.value,
                  }))
                }
                name="address"
              />{" "}
              {/* added name attribute */}
            </Form.Group>
            <Form.Group>
              <Form.Label>Phone No</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the Devotee phone no"
                value={orderData.phoneno}
                onChange={(e) =>
                  setOrderData((prevState) => ({
                    ...prevState,
                    phoneno: e.target.value,
                  }))
                }
                name="phoneno"
              />{" "}
              {/* added name attribute */}
            </Form.Group>
            <Form.Group>
              <Form.Label> Gotra </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the Devotee gotra"
                value={orderData.age}
                onChange={(e) =>
                  setOrderData((prevState) => ({
                    ...prevState,
                    age: e.target.value,
                  }))
                }
                name="age"
              />{" "}
              {/* added name attribute */}
            </Form.Group>
            {/* <Form.Group>
  <Form.Label>Date</Form.Label>
  <Form.Control
    type="text"
    placeholder="Enter the date"
    value={orderData.date}
    onChange={(e) =>
      setOrderData((prevState) => ({
        ...prevState,
        date: e.target.value,
      }))
    }
    name="date"
  />
</Form.Group> */}
            {/* <Form.Group>
              <Form.Label> Gotra </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the Devotee Gotra"
                value={orderData.gotra}
                onChange={(e) =>
                  setOrderData((prevState) => ({
                    ...prevState,
                    gotra: e.target.value,
                  }))
                }
                name="gotra"
              />{" "}
            </Form.Group> */}
            {/* ... [Any other form fields you need] */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmitOrder}>
            {" "}
            {/* replaced handleClose with handleSubmitOrder */}
            Confirm Purchase
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default Cart;

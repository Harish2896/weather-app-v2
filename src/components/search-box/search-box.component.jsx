import "./search-box.styles.css";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useState, useContext } from "react";
import { SetCityContext } from "../../context/setcity-context/setcity.context";

const SearchBox = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { setCity } = useContext(SetCityContext);

  const submitHandler = (event) => {
    event.preventDefault();
    setCity(searchQuery);
    setSearchQuery("");
  };

  const changeHandler = async (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Form onSubmit={submitHandler}>
      <Row>
        <Form.Label
          className="text-center"
          style={{ width: "50%", fontSize: "1.2rem" }}
        >
          Search your city
        </Form.Label>
      </Row>
      <Row>
        <Col>
          <Form.Control
            name="search"
            type="search"
            onChange={changeHandler}
            value={searchQuery}
          />
        </Col>
        <Col>
          <Button type="submit" variant="dark">
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBox;

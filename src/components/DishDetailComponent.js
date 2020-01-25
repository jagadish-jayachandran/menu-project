import React, { Component } from 'react';
import {
  Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle
} from 'reactstrap';


class DishDetail extends Component {
  constructor(props) {
    super(props);

  }
  
  render() {
    const dish = this.props.dish;
    if (dish != null)
      return (
        <div key={dish.id}>
        <Card >
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
        </div>
      );
    else
      return (
        <div></div>
      );
  };

}

export default DishDetail;
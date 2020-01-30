import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle
} from 'reactstrap';


class DishDetail extends Component {
  
  render() {
    const com = this.props.comments.map((comt) => {
      if (comt != null)
        return (
          <div key={comt.id}>
            <p>    {comt.comment}          </p>
            <p>    {comt.name} {comt.date}          </p>
          </div>
        )
      else
        return (
          <div></div>
        )
    });
    const dish = this.props.dish;
    if (dish != null)
      return (
        <div className="row">

        <div className="col-12 col-md-5 m-1">
        <div key={dish.id}>
        <Card >
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
        </div>
        </div>
        <div className="col-12 col-md-5 m-1">
          {com}
        </div>
        </div>

      );
    else
      return (
        <div></div>
      );
  };

}

export default DishDetail;
import React, { Component } from 'react';
// import {
//   Card, CardImg, CardImgOverlay, CardText, CardBody,
//   CardTitle
// } from 'reactstrap';


class DishDetailView extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const com = this.props.comments.map((comt) => {
      if (comt != null )
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
 

    return (
      <div> <h4>
        Comments
            </h4>
{com}
      </div>
    )
  }
}

export default DishDetailView;
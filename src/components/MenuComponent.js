import React, { Component } from 'react';
import {
  Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle
} from 'reactstrap';

import DishDetail  from './DishDetailComponent';
import DishDetailView from './DishDetailView';
class Menu extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      selectedDish: null,
      coments: [{
        id:0,
        comment: 'welcome reat js',
        name: 'jagadish',
        date: 'oct 17 2012'
      }]
    };
  }
  onDishSelect(dish) {
    this.setState({ selectedDish: dish });
  }

//   renderComments(coments) {
// console.log(coments);
//     if (coments != null)
//      coments.map((comt) => {
//       return (
//         <div>
//           <p>          {comt.comment}          </p>
//           <p>            {comt.name} {comt.date}          </p>
//         </div>
//       )
//     } )
      
//     else
//       return (
//         <div>
//         </div>
//       )
//   }
  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div className="col-12 col-md-5 m-1" key={dish.id}>
          <Card 
            onClick={() => this.onDishSelect(dish)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });
    
    return (
      <div className="container">
        <div className="row">
          {menu}
        </div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <DishDetail dish={this.state.selectedDish} />
            {/* {this.renderDish(this.state.selectedDish)} */}
          </div>
          <div className="col-12 col-md-5 m-1">
            <DishDetailView comments={this.state.coments}/>
           
            {/* {this.renderComments(this.state.coments)} */}
          </div>

        </div>
      </div>
    );
  }
}

export default Menu;
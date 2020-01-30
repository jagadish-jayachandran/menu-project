import React, { Component } from 'react';
import {
  Card, CardImg, CardImgOverlay,
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
        comment: 'Imagine all eatables, living in confusion! ',
        name: 'john lemon',
        date: 'oct 17 2012'
      },
        {
          id: 1,
          comment: 'Sends anyone to heaven, i wish i could get my mother-in-law to eat it!.',
          name: 'Paul McVites',
          date: 'sept 06 2014'
        },
        {
          id: 2,
          comment: 'eat it ! just eat it. ',
          name: 'Michael jacklson',
          date: 'feb 14 2015'
        },
        {
          id: 3,
          comment: 'Ultimate reaching for stars!',
          name: 'jRingo starry',
          date: 'dec 03 2013'
        },
        {
          id: 4,
          comment: 'Its your birthday, we are gonna party.',
          name: '25 cent',
          date: 'dec 03 2011'
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
        <div >
         
          <DishDetail dish={this.state.selectedDish} comments={this.state.coments}/>
            {/* {this.renderDish(this.state.selectedDish) } */}
          {/* </div> */}
          {/* <div className="col-12 col-md-5 m-1"> */}
            {/* <DishDetailView comments={this.state.coments}/> */}
           
            {/* {this.renderComments(this.state.coments)} */}
          {/* </div> */}

        </div>
      </div>
    );
  }
}

export default Menu;
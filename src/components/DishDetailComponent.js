import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component {

  constructor(props) {
      super(props);

      this.state = {
          selectedDish: null,
          dishComments: null,
      }
  }

  onDishSelect(dish) {
      this.setState({selectedDish: dish});
      this.setState({dishComments: dish.comments});
  }

  renderDish(dish) {
      if (dish != null)
          return(
              <Card>
                  <CardImg top src={dish.image} alt={dish.name} />
                  <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                  </CardBody>
              </Card>
          );
      else
          return(
              <div></div>
          );
  }

  renderComments(comments) {
      if (comments != null)
          return(
              <Card>
                  <CardBody>
                    <CardTitle>Comments</CardTitle>
                    this.props.comments.map((comm) =>
                    <CardText>{comm.comment} <br/>-- {comm.author}, {comm.date}</CardText>
                    )
                  </CardBody>
              </Card>
          );
      else
          return(
              <div></div>
          );
  }

  render() {
    return(
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          {this.renderDish(this.props.selectedDish)}
        </div>
        <div className="col-12 col-md-5 m-1">
          {this.renderComments(this.props.dishComments)}
        </div>
      </div>
    )
  }
}

export default DishDetail;

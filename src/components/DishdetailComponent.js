import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

    function RenderDish({dish}) {
        if(dish != null) {
            return (
                <div className="container">
                    <div className="row">
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle><h5>{dish.name}</h5></CardTitle>
                            <CardText><p>{dish.description}</p></CardText>
                        </CardBody>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    function RenderComments({comments}) {
      }
        return (
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    <li>{dishComments}</li>
                </ul>
            </div>
        );
  }

    const  DishDetail = (props) => {

        const dish = this.props.dish;

        if(props.dish != null) {
            return(
                <div class="container">
                  <div className="row">
                      <RenderDish dish={props.dish} />
                      <RenderComments comments={props.dish.comments} />
                  </div>
                </div>
            );
        }

        const dishDetails = this.renderDish(dish);
        const commentDetails = this.renderComments(dish.comments);
        return (
            <div className="row">
                {dishDetails}
                {commentDetails}
            </div>
        );
    }
}

export default DishDetail;

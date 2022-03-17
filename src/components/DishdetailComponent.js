import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

    function RenderDish({dish}) {
        if(dish != null) {
            return (
                <div className="col-12 col-md-5 m-1 text-left">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle><h5>{dish.name}</h5></CardTitle>
                            <CardText><p>{dish.description}</p></CardText>
                        </CardBody>
                    </Card>
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
        if(comments == null) {
            return (
                <div></div>
            );
        }
        const dishComments = comments.map((comment) => {
            return (
                <span key={comment.id} className="p-1">
                    <p className="text-left">{comment.comment}<br/>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                    </p>
                </span>
            )

        })
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

        if(dish == null) {
            return(
                <div></div>
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

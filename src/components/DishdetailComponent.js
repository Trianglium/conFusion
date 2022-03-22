import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

    function RenderDish({dish}) {
        if(dish != null) {
            return (
                <div className="col-12 col-md-5 m-1">
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

    function RenderComments({comments, addComment, dishId}) {
      if(comments != null) {
        return (
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {comments.map((comment) => {
                        return (
                            <li key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                            </li>
                        );
                    })}

                </ul>
            </div>
        );
      }
      else {
        return (
          <div></div>
        );
      }
    }

    const DishDetail=(props) => {
        if (props.dish != null) {
        	 return (
		          <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.comments} addComment={props.addComment} dishId={props.dish.id}
                        />
                        <CommentForm dishId={dishId} addComment={addComment} />
                    </div>
                </div>
                </div>
	        );
        	}else{
        		return(<div></div>);
        	}
    }

class CommentForm extends Component{


	constructor(props){
		super(props);

		this.state={
			isModalOpen: false
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
    this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
	}

	handleSubmit(values) {
      this.toggleModal();
      console.log('Current State is: ' + JSON.stringify(values));
      alert('Current State is: ' + JSON.stringify(values));
    }

  toggleModal(){
		   this.setState({
			    isModalOpen: !this.state.isModalOpen
		});
	}

	render(){
		return(
			<div>
				<Button outline color="secondary"  onClick={this.toggleModal}>
	                <span className="fa fa-pencil fa-lg"></span> Submit Comment
	            </Button>
				<Modal isOpen={this.state.isModalOpen} toggle = {this.toggleModal}>
	                	<ModalHeader toggle = {this.toggleModal}> Submit Comment </ModalHeader>
	                	<ModalBody>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                      <Row className="form-group">
                           <Label htmlFor="rating">Rating</Label>
                                <Col md={12}>
                                    <Control.select model=".rating" name="rating"
                                 className="form-control">
                                         <option>1</option>
                                         <option>2</option>
                                         <option>3</option>
                                         <option>4</option>
                                         <option>5</option>
                                    </Control.select>
                                  </Col>
                      </Row>
                       <Row className="form-group">
                          <Label htmlFor="author" md={2}>Your Name</Label>
                                 <Col md={10}>
                                     <Control.text model=".author" id="author" name="author"
                                         placeholder="Your Name"
                                         className="form-control"
                                         validators={{
                                             required, minLength: minLength(3), maxLength: maxLength(15)
                                         }}
                                          />
                                     <Errors
                                         className="text-danger"
                                         model=".author"
                                         show="touched"
                                         messages={{
                                             required: 'Required',
                                             minLength: 'Must be greater than 2 characters',
                                             maxLength: 'Must be 15 characters or less'
                                         }}
                                      />
                                 </Col>
                             </Row>
      	                			<Row className="form-group">
      	                             <Label htmlFor="comment">Comment</Label>
      	                             <Col md={12}>
      	                                    <Control.textarea model=".comment" id="comment" name="comment"
      	                                        rows="5"
      	                                        className="form-control" />
                                    	</Col>
                              </Row>
                              <Row className="form-group">
	                              <Col md={{size:10, offset: 2}}>
	                                  <Button type="submit" color="primary">
	                                    Submit</Button>
	                              </Col>
                            	</Row>
                        </LocalForm>
	                	</ModalBody>
	            </Modal>
			</div>
		);

	}

}
export default DishDetail;

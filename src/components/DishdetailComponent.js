import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import { Link } from 'react-router-dom';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);



class ContactForm extends Component {
  constructor(props) {
      super(props);
      
      this.state = {
          isModalOpen: false
      };
        
      this.toggleModal = this.toggleModal.bind(this);
  }
  
  toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
  }
  
  handleComment(event) {
      this.toggleModal();
      alert("Rating: " + this.rating.value + " Custname: " + this.custname.value
            + " Comment: " + this.comment.value);
      event.preventDefault();

  }

  
  render() {
      return(
          <div>
              <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
          </div>
          <div>
              <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit a Comment</ModalHeader>
                    <ModalBody>
                      <Form onSubmit={this.handleComment}>
                              <FormGroup>
                                  <Label htmlFor="custname">Your Name</Label>
                                  <Input type="text" id="custname" name="custname"
                                      innerRef={(input) => this.custname = input} />
                              </FormGroup>
                              <FormGroup>
                                  <Label htmlFor="rating">Rating</Label>
                                  <Input type="select" id="rating" name="rating"
                                      innerRef={(input) => this.rating = input}> 
                                      <option>1</option>                                      <option>2</option>                                      <option>3</option>                                      <option>4</option>                                      <option>5</option>                                      
                                  </Input>
                              </FormGroup>
                              <FormGroup>
                                  <Label htmlFor="comment">Textera</Label>
                                      <Input type="textera" id="comment" name="comment" innerRef={(input) => this.comment = input}  />
                                 
                              </FormGroup>
                              <Button type="submit" value="submit" color="primary">Submit</Button>
                        </Form>
                    </ModalBody>
                </Modal>
          </div>
      );
  }
  
  return(
      <div></div>
  );
  
} 

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

    function RenderComments({comments}) {
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
                <CommentForm />
            </div>
        );
      }
      else {
        return (
          <div></div>
        );
      }
    }

    const  DishDetail = (props) => {
          if(props.dish != null) {
              return(
                  <div className="container">
                    <div className="row">
                      <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                      </Breadcrumb>
                      <div className="col-12">
                        <h3>{ props.dish.name }</h3>
                        <hr />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                      </div>
                      <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />
                      </div>
                    </div>
                  </div>
              );
          }
          else {
            return(
              <div></div>
            );
          }
    }

export default DishDetail;

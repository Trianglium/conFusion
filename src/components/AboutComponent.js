import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';

function About(props) {
  const leaders = props.leaders.map((leader) => {
    return (
      <p>Leader {leader.name}</p>
    );
  });

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
          <BreadcrumbItem active>About Us</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>About Us</h3>
          <hr />
        </div>
      </div>
      <div className="row row-content">
        <div className="col-12 col-md-6">
          <h2>Our History</h2>
          <p></p>
        </div>
        <div className="col-12 col-md-5">
          <Card>
            <CardHeader className="bg-primary text-white">Facts At a Glance></CardHeader>
            <CardBody>
              <dl className="row p-1">
                <dt className="col-6">Started</dt>
                <dd className="col-6"></dd>
                <dt className="col-6">Major Stake Holder</dt>
                <dd className="col-6"></dd>
                <dt className="col-6">Last Year's Turnover</dt>
                <dd className="col-6"> </dd>
                <dt className="col-6">Employees</dt>
                <dd className="col-6"></dd>
              </dl>
            </CardBody>
          </Card>
        </div>
        <div className="col-12">
          <Card>
            <CardBody className="bg-faded">
              <blockquote className="blockquote">
                <p className="mb-0"></p>
                <footer className="blockquote-footer">
                  <cite title="Source Title"></cite>
                </footer>
              </blockquote>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="row row-content">
        <div className="col-12"></col>
        <div className="col-12"></col>
      </div>
    </div>
  );
}



export default About;

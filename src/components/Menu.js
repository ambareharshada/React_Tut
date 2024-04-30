import HeaderSection from "./HeaderSection";
import { Link } from "react-router-dom";
import { Container, Card, Button } from 'react-bootstrap';
// import "bootstrap/dist/css/bootstrap.css";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
// import { Container } from 'react-bootstrap';
const Menu = () => {
  return (
    <>
      <HeaderSection />
      <h2 className="head-2">Menu Page</h2>
      {/* <Link to="/">Click to go to Main Section</Link> */}
      <Container className="text-center my-5 md-0">
            <Card bg="info" text="white">
                <Card.Body>
                    <Card.Title>Welcome to our Website</Card.Title>
                    <Card.Text>
                        Discover the beauty of React Bootstrap Layout with a stunning container component approach.
                    </Card.Text>
                    <Button variant="light">Learn More</Button>
                </Card.Body>
            </Card>
        </Container>
      <Container className="d-flex justify-content-around align-items-center flex-wrap my-5">
            <div className="bg-success text-white p-3 m-2">Element 1</div>
            <div className="bg-warning text-dark p-3 m-2">Element 2</div>
            <div className="bg-danger text-white p-3 m-2">Element 3</div>
            <div className="bg-info text-white p-3 m-2">Element 4</div>
        </Container>
      {/* <div class="container">
        <div class="row">
          <div class="col-sm-3">
            <div class="card">
              <img
                class="card-img-top img-fluid"
                src="//placehold.it/500x200"
                alt="Card image cap"
              />
              <div class="card-block">
                <h4 class="card-title">Card title</h4>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="card">
              <div class="card-block">
                <h4 class="card-title">Card title</h4>
                <p class="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="card">
              <img
                class="card-img-top img-fluid"
                src="//placehold.it/500x180"
                alt="Card image cap"
              />
              <div class="card-block">
                <h4 class="card-title">Card title</h4>
                <p class="card-text">
                  This card has supporting text below as a natural lead-in.
                  Aliquam codeply mauris arcu, tristique a lobortis vitae,
                  condimentum feugiat justo.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="card">
              <div class="card-block">
                <h4 class="card-title">Card title</h4>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="card">
              <div class="card-block">
                <h4 class="card-title">Card title</h4>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="card">
              <div class="card-block">
                <h4 class="card-title">Card title</h4>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="card">
              <div class="card-block">
                <h4 class="card-title">Card title another</h4>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-3">
            <div class="card">
              <img
                class="card-img-top img-fluid"
                src="//placehold.it/500x220"
                alt="Card image cap"
              />
              <div class="card-block">
                <h4 class="card-title">Card title</h4>
                <p class="card-text">
                  This card has even longer content than the first to show that
                  equal height action.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div class="container">
        <div class="row">
          <div class="col-12 col-sm-8 col-md-6 col-lg-4">
            <div class="card">
              <img
                class="card-img"
                src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/vans.png"
                alt="Vans"
              />
              <div class="card-img-overlay d-flex justify-content-end">
                <a href="#" class="card-link text-danger like">
                  <i class="fas fa-heart"></i>
                </a>
              </div>
              <div class="card-body">
                <h4 class="card-title">Vans Sk8-Hi MTE Shoes</h4>
                <h6 class="card-subtitle mb-2 text-muted">Style: VA33TXRJ5</h6>
                <p class="card-text">
                  The Vans All-Weather MTE Collection features footwear and
                  apparel designed to withstand the elements whilst still
                  looking cool.{" "}
                </p>
                <div class="options d-flex flex-fill">
                  <select class="custom-select mr-1">
                    <option selected>Color</option>
                    <option value="1">Green</option>
                    <option value="2">Blue</option>
                    <option value="3">Red</option>
                  </select>
                  <select class="custom-select ml-1">
                    <option selected>Size</option>
                    <option value="1">41</option>
                    <option value="2">42</option>
                    <option value="3">43</option>
                  </select>
                </div>
                <div class="buy d-flex justify-content-between align-items-center">
                  <div class="price text-success">
                    <h5 class="mt-4">$125</h5>
                  </div>
                  <a href="#" class="btn btn-danger mt-3">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};
export default Menu;

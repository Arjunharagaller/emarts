import { Container } from 'react-bootstrap';
import Products from './Products';

function Home() {
  return (
    <>
        <div className="card text-bg-dark border-0 margin-0">
            <img src="/assests/bg.jpg" className="card-img" alt="bg" height='500px'/>
            <div className="card-img-overlay d-flex flex-column justify-content-center">
                <Container>
                <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON  ARRIVALS</h5>
                <p className="card-text lead fs-2">CHECK OUT ALL TRENDS</p>
                </Container>
            </div>
        </div>
        <Products></Products>
    </>
  );
}

export default Home;
import Carousel from 'react-bootstrap/Carousel';
import Products from './Products';
import { useToast, Button } from "@chakra-ui/react";
 import ProducShow from './Productshow';
function Home() {
    const toast = useToast();
  return (
    <>
     
    <Carousel fade={true} slide={false} pause={false}>
      <Carousel.Item interval={2000}>
        <img
          className="d-block "
          style={{height:"100vh",width:"220vh"}}
          src="https://images.unsplash.com/photo-1528141603775-81fd11f61682?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fDE5MjAlMjB4JTIwMTA4MHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block "
          style={{height:"100vh",width:"220vh"}}
          src="https://images.unsplash.com/photo-1550475966-70af27831597?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fDE5MjAlMjB4JTIwMTA4MHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block "
          style={{height:"100vh",width:"220vh"}}
          src="https://images.unsplash.com/photo-1511227499331-25c621db940e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fDE5MjAlMjB4JTIwMTA4MHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
     
{/* .....................prodcuts */}
 
 <Products/>
 



    </>
  );
}

export default Home;
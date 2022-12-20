import Carousel from "react-bootstrap/Carousel";
import Products from "./Products";
import LargeWithLogoLeft from"./Footer"
import { useToast, Button } from "@chakra-ui/react";
import ProducShow from "./Productshow";
function Home() {
  const toast = useToast();
  return (
    <>
      <Carousel fade={true} slide={false} pause={false}>
        <Carousel.Item interval={2000}>
          <img
            className="d-block "
            style={{ height: "100vh", width: "220vh" }}
            src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1671091658_Oneplus_10T_Desktop_web_num.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block "
            style={{ height: "100vh", width: "220vh" }}
            src="https://img.freepik.com/free-psd/black-friday-sale-banner-with-red-black-glued-paper-background_1361-2847.jpg?w=740&t=st=1671131791~exp=1671132391~hmac=345a81c18ca76cddd0fc85ecb7a12cb0e884770c875c1b3d82e07c279e9a195e"
            alt="Second slide"
          />

          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block "
            style={{ height: "100vh", width: "220vh" }}
            src="https://img.freepik.com/free-vector/black-friday-sale-design-template-conceptual-layout-web-print_91128-1081.jpg?w=900&t=st=1671131572~exp=1671132172~hmac=ac0f27fba42cfae71f75bf29778f50e52d79ebadb77fca4889593844ae9d101d"
            alt="Third slide"
          />

          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* .....................prodcuts */}

      <Products />
      <LargeWithLogoLeft/>
    </>
  );
}

export default Home;

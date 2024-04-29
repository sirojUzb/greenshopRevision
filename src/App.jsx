import { Carousel } from "antd";
import { Button } from "./CarouselItem/generic_style";
import {
  LoginOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  BellOutlined,
} from "@ant-design/icons";
import { Wrapper } from "./style";
import CarouselItem from "./CarouselItem";

const App = () => {
  return (
    <div>
      <Wrapper>
        <Wrapper.NavbarWrapper>
          <Wrapper.NavbarWrapper.Left>
            <img
              className="img"
              src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Flogo.svg?alt=media&amp;token=fc9659d6-f435-43b9-a624-8b0d3a574baa"
              alt="logo"
            />
          </Wrapper.NavbarWrapper.Left>
          <Wrapper.NavbarWrapper.Middle>
            <h3>Home</h3>
            <h3>Blog</h3>
          </Wrapper.NavbarWrapper.Middle>
          <Wrapper.NavbarWrapper.Right>
            <ShoppingCartOutlined className="icon" />
            <BellOutlined className="icon" />
            <SearchOutlined className="icon" />
            <Button width="96" height="40">
              <LoginOutlined />
              Login
            </Button>
          </Wrapper.NavbarWrapper.Right>
        </Wrapper.NavbarWrapper>
        {/* NavbarWrapper finish here */}
        <Wrapper.CarouselWrapper>
          <Carousel autoplay>
            <CarouselItem title="LET'S MAKE A BETTER" />
            <CarouselItem title="LET'S LIVE IN A BETTER" />
            <CarouselItem title="LET'S OBSERVE A BETTER" />
          </Carousel>
        </Wrapper.CarouselWrapper>
      </Wrapper>
    </div>
  );
};

export default App;

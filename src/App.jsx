import { Carousel } from "antd";
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
            <button type="button">
              <LoginOutlined />
              Login
            </button>
          </Wrapper.NavbarWrapper.Right>
        </Wrapper.NavbarWrapper>
        <Wrapper.CarouselWrapper>
          <Carousel autoplay>
            <CarouselItem bg="red" />
            <CarouselItem bg="green" />
            <CarouselItem bg="pink" />
          </Carousel>
        </Wrapper.CarouselWrapper>
      </Wrapper>
    </div>
  );
};

export default App;

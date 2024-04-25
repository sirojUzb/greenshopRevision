// import { Badge, Button } from "antd";
// import { ShoppingCartOutlined } from "@ant-design/icons";
import { Wrapper } from "./style";

const App = () => {
  return (
    <div>
      <Wrapper>
        <Wrapper.NavbarWrapper>
          <Wrapper.NavbarWrapper.Left>123</Wrapper.NavbarWrapper.Left>
          <Wrapper.NavbarWrapper.Middle>456</Wrapper.NavbarWrapper.Middle>
          <Wrapper.NavbarWrapper.Right>789</Wrapper.NavbarWrapper.Right>
        </Wrapper.NavbarWrapper>
      </Wrapper>
    </div>
  );
};

export default App;
// Wrapper - left,middle, right
//* <Wrapper.Left>
//     <img
//       className="img"
//       src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Flogo.svg?alt=media&amp;token=fc9659d6-f435-43b9-a624-8b0d3a574baa"
//     />
//   </Wrapper.Left>
//   <Wrapper.Middle>
//     <Wrapper.Middle.Item>Home</Wrapper.Middle.Item>
//     <Wrapper.Middle.Item>Shop</Wrapper.Middle.Item>
//     <Wrapper.Middle.Item>Plant Care</Wrapper.Middle.Item>
//     <Wrapper.Middle.Item>Blogs</Wrapper.Middle.Item>
//   </Wrapper.Middle>
//   <Wrapper.Right>
//     <Badge dot>
//       <ShoppingCartOutlined className="icon" />
//     </Badge>
//     <Button type="primary">Login</Button>
//   </Wrapper.Right>

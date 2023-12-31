import ReactDOM from "react-dom/client";
import HomeLayout from "./components/HomeLayout/HomeLayout";
import DataBinding from "./DataBinding/DataBinding";
//import scss ở index (Vì import ở bất kì file nào khi build vẫn ra index.html)
import "./assets/scss/style.scss";
import StyleComponent from "./StyleComponent/StyleComponent";
import HandleEvent from "./HandleEvent/HandleEvent";
import ChangeFontSize from "./StateDemo/ChangeFontSize";
import ChangeColor from "./StateDemo/ChangeColor";
import ChangeAvatar from "./StateDemo/ChangeAvatar";
import ChangeCarColor from "./StateDemo/ChangeCarColor";
import RenderWithMap from "./RenderWithMap/RenderWithMap";
import Card from "./Props/DemoProps/Card";
import DemoProps from "./Props/DemoProps/DemoProps";
import EXRenderProductList from "./Props/EXRenderProductList/EXRenderProductList";
import BaiTapXemChiTiet from "./Props/BaiTapXemChiTiet/BaiTapXemChiTiet";
import BaiTapGioHang from "./Props/BaiTapGioHang/BaiTapGioHang";
// Cấu hình router dom
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import HomeTemplates from "./templates/HomeTemplates";
import Login from "./Pages/Login";
import UserTemplate from "./templates/UserTemplate";
import Register from "./Pages/Register";
import Admin from "./Pages/Admin";
import ReactForm from "./Pages/ReactForm/ReactForm";
import ReactLifeCycle from "./Pages/ReactLifeCycle/ReactLifeCycle";

// Cấu hình redux
import { Provider } from "react-redux";
import { store } from "./redux/store";
import ChangeNumberRedux from "./DemoRedux/ChangeNumberRedux";
import ChangeCarColorRedux from "./DemoRedux/ChangeCarColorRedux";
import ChangeFontSizeRedux from "./DemoRedux/ChangeFontSizeRedux";
import BaiTapGioHangRedux from "./DemoRedux/BaiTapGioHangRedux/BaiTapGioHangRedux";
import DanhSachSanPhamRedux from "./DemoRedux/BaiTapGioHangRedux/DanhSachSanPhamRedux";

//Tạo root trên thẻ div#root
const root = ReactDOM.createRoot(document.getElementById("root"));
//JSX
root.render(
  <div className="abc">
    {/* <HomeLayout />
      <DataBinding />
      <p className='text-red'>demo scss</p>
      <StyleComponent/> */}
    {/* <ChangeFontSize /> */}
    {/* <HandleEvent /> */}
    {/* <ChangeColor /> */}
    {/* <ChangeAvatar /> */}
    {/* <ChangeCarColor/> */}
    {/* <RenderWithMap/> */}
    {/* <Card/> */}
    {/* <DemoProps/> */}
    {/* <EXRenderProductList/> */}
    {/* <BaiTapXemChiTiet/> */}
    {/* <BaiTapGioHang/> */}
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<HomeTemplates />}>
            <Route index element={<DanhSachSanPhamRedux/>}></Route>
            <Route path="gio-hang" element={<BaiTapGioHang />}></Route>
            <Route path="bt-car-color" element={<ChangeCarColor />}></Route>
            <Route path="login" element={<Login />}></Route>

            <Route path="react-form" element={<ReactForm />}></Route>

            <Route path="react-life-cycle" element={<ReactLifeCycle />}></Route>

            <Route path="redux-change-number" element={<ChangeNumberRedux />}></Route>

            <Route path="redux-change-car" element={<ChangeCarColorRedux />}></Route>

            <Route path="redux-change-font-size" element={<ChangeFontSizeRedux/>}></Route>

            <Route path="redux-gio-hang" element={<BaiTapGioHangRedux/>}></Route>
          </Route>
          <Route path="user" element={<UserTemplate />}>
            <Route index element={<Login />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="register" element={<Register />}></Route>
          </Route>
          <Route path="admin" element={<Admin />}></Route>
          <Route path="*" element={<Navigate to="/user" />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </div>
);

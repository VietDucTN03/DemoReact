import ReactDOM from 'react-dom/client';
import HomeLayout from './components/HomeLayout/HomeLayout';
import DataBinding from './DataBinding/DataBinding';
//import scss ở index (Vì import ở bất kì file nào khi build vẫn ra index.html)
import './assets/scss/style.scss'
import StyleComponent from './StyleComponent/StyleComponent';
import HandleEvent from './HandleEvent/HandleEvent';
import ChangeFontSize from './StateDemo/ChangeFontSize';
import ChangeColor from './StateDemo/ChangeColor';
import ChangeAvatar from './StateDemo/ChangeAvatar';
import ChangeCarColor from './StateDemo/ChangeCarColor';
import RenderWithMap from './RenderWithMap/RenderWithMap';
import Card from './Props/DemoProps/Card';
import DemoProps from './Props/DemoProps/DemoProps';
import EXRenderProductList from './Props/EXRenderProductList/EXRenderProductList';
import BaiTapXemChiTiet from './Props/BaiTapXemChiTiet/BaiTapXemChiTiet';
import BaiTapGioHang from './Props/BaiTapGioHang/BaiTapGioHang';
// Cấu hình router dom
import {BrowserRouter,Routes,Route,NavLink, Navigate} from 'react-router-dom'
import Header from './components/Header';
import HomeTemplates from './templates/HomeTemplates';
import Login from './Pages/Login'
import UserTemplate from './templates/UserTemplate';
import Register from './Pages/Register';
import Admin from './Pages/Admin';
import ReactForm from './Pages/ReactForm/ReactForm';
import ReactLifeCycle from './Pages/ReactLifeCycle/ReactLifeCycle';

//Tạo root trên thẻ div#root
const root = ReactDOM.createRoot(document.getElementById('root'));
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
      <BrowserRouter>
        <Routes>
          <Route path='' element={<HomeTemplates/>}>
            <Route index element={<div>Home Page</div>}></Route>
            <Route path='gio-hang' element={<BaiTapGioHang/>}></Route>
            <Route path='bt-car-color' element={<ChangeCarColor/>}></Route>
            <Route path='login' element={<Login /> }></Route>

            <Route path='react-form' element={<ReactForm/>}></Route>

            <Route path='react-life-cycle' element={<ReactLifeCycle/>}></Route>
          </Route>
          <Route path='user' element={<UserTemplate/>}>
            <Route index element={<Login/>}></Route>
            <Route path='login' element={<Login/>}></Route>
            <Route path='register' element={<Register/>}></Route>
          </Route>
          <Route path='admin' element={<Admin/>}></Route>
          <Route path='*' element={<Navigate to='/user'/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
);


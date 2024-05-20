import React from "react";
import style from "./header.module.scss";
import headerImg from "..//../assets/images/header/Logo.svg";
import headerSearchIcon from "..//../assets/images/header/search-normal.svg";
import headerRightImg1 from "..//../assets/images/header/Frame 6.svg";
import headerRightImg2 from "..//../assets/images/header/Frame 3.svg";
import headerHamburger from "..//../assets/images/header/menu.svg";
import notification from "..//..//assets/images/header/notification.svg";
import smsIcon from "..//..//assets/images/header/sms.svg";
import userPhoto from "..//..//assets/images/header/userPP.svg";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchGetProductsByFilter } from "../../store/reducers/thunks/productThunk";
import { route1 } from "../../routes/route1";
import { Link } from "react-router-dom";
import Register from "../loginAndRegister/register/Register";
import Login from "../loginAndRegister/login/Login";
import UserLogin from "../userLogin/UserLogin";

function Header() {
  const { token } = useSelector((state) => state.auth);
  const { shoppingCartProducts } = useSelector((state) => state.shoppingCart);
  const [logOut, setLogOut] = React.useState(false);
  function clickUserPP() {
    setLogOut(true);
  }
  const { products } = useSelector((state) => state.products);

  const [auth, setAuth] = React.useState({
    register: false,
    login: false,
  });

  const inputRef = React.useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleClickUser() {
    setAuth((prev) => ({ ...prev, register: true }));
  }

  function handleChange(e) {
    inputRef.current = e.target.value;
  }
  console.log(inputRef);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(inputRef.current);
    const test = dispatch(
      fetchGetProductsByFilter({ productName: inputRef.current })
    );

    if (test.arg) {
      navigate(route1.ProductList);
    }
  }

  return (
    <header className={style.header}>
      <Link to={route1.Home}>
        <div className={style.headerLogo}>
          <img src={headerImg} alt="" />
        </div>
      </Link>
      <form onSubmit={handleSubmit} className={style.headerInputAndSelect}>
        <select>
          <option value="">All Catagories</option>
        </select>
        <div className={style.line}></div>

        <input
          type="text"
          placeholder="Search on Lenny..."
          className={style.headerInput}
          onChange={handleChange}
        />
        <div className={style.headerSearch}>
          <img src={headerSearchIcon} alt="" />
        </div>
      </form>
      <div className={style.headerRight}>
        <Link to={route1.ShoppingCart}>
          <div className={style.rightImg1}>
            <img src={headerRightImg1} alt="" />
            <div className={style.shoppingCircle}>
              <span className={style.shoppingCircleNumber}>
                {shoppingCartProducts.length}
              </span>
            </div>
          </div>
        </Link>

        {token && (
          <div className={style.rightImg3}>
            <img src={notification} alt="" />
          </div>
        )}
        {token && (
          <div className={style.rightImg4}>
            <img src={smsIcon} alt="" />
          </div>
        )}
        <div className={style.line2}></div>

        {token ? (
          <div className={style.rightImg6} onClick={clickUserPP}>
            <img src={userPhoto} alt="" />
          </div>
        ) : (
          <div className={style.rightImg2} onClick={handleClickUser}>
            <img src={headerRightImg2} alt="" />
          </div>
        )}

        <div className={style.headMenu}>
          <img src={headerHamburger} alt="" />
        </div>
      </div>
      {auth.register && <Register setAuth={setAuth} />}
      {auth.login && <Login setAuth={setAuth} />}
      {logOut && <UserLogin setLogOut={setLogOut} img={userPhoto} />}
    </header>
  );
}

export default Header;

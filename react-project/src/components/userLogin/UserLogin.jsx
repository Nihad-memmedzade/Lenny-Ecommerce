import React from "react";
import "./userLogin.scss";
import { logOutFn } from "../../store/reducers/authReducer";
import { useDispatch,useSelector } from "react-redux";
import img1 from "..//..//assets/images/header/vuesax_linear_moneys.svg";
import img2 from "..//..//assets/images/header/coin.svg";
import img4 from "..//..//assets/images/header/vuesax_linear_receipt-item.svg";
import img5 from "..//..//assets/images/header/heart.svg";
import img6 from "..//..//assets/images/header/logout.svg";

function UserLogin({ img ,setLogOut}) {


  const {
    token,
  } = useSelector((state) => state.auth);

console.log(token,"sssdsdTTT");
  
  const modalRef = React.useRef(null);
const dispatch = useDispatch();
  React.useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setLogOut(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setLogOut]);

  function handleClick(){
    dispatch(logOutFn())
    setLogOut(false)
  }
  return (
    <div className="userLogin" ref={modalRef}>
      <div className="userLogin-top-container">
        <div className="userLogin-pp">
          <img src={img} alt="image" />
        </div>
        <div className="userLogin-top-user">
          <p className="userLogin-top-username">Yelena Stacia</p>
          <p className="userLogin-top-member">Platinum Member</p>
        </div>
      </div>
      <div className="line-userLogin"></div>
      <div className="userLogin-Wallet">
        <p className="userLogin-Wallet-title">Wallet</p>
        <div className="wallet-balance">
          <div className="wallet-Balance-row">
            <div className="wallet-Balance-row1">
              <div className="walletImg1">
                <img src={img1} alt="" />
              </div>
              <p className="wallet-balance-p">Lenny Balance</p>
            </div>
            <span className="wallet-balance-Price">$928,28</span>
          </div>
          <div className="wallet-Balance-row">
            <div className="wallet-Balance-row1">
              <div className="walletImg1">
                <img src={img2} alt="" />
              </div>
              <p className="wallet-balance-p">Lenny Coins</p>
            </div>
            <span className="wallet-balance-Price">0.092</span>
          </div>
        </div>
      </div>
      <div className="line-userLogin"></div>
      <div className="userLogin-Wallet">
        <p className="userLogin-Wallet-title">Menu</p>
        <div className="wallet-balance">
          <div className="wallet-Balance-row">
            <div className="wallet-Balance-row1">
              <div className="walletImg1">
                <img src={img4} alt="" />
              </div>
              <p className="wallet-balance-p">Purchase</p>
            </div>
         
          </div>
          <div className="wallet-Balance-row">
            <div className="wallet-Balance-row1">
              <div className="walletImg1">
                <img src={img5} alt="" />
              </div>
              <p className="wallet-balance-p">wishlist</p>
            </div>

          </div>
        </div>
      </div>
      <div className="line-userLogin"></div>
      <div className="userLogin-Wallet">
   
        <div className="wallet-balance">
          <div className="wallet-Balance-row">
            <div className="wallet-Balance-row1">
              <div className="walletImg1 logOutimg"  >
                <img src={img6} alt="" />
              </div>
              <p className="wallet-balance-p2" onClick={handleClick}>Log out</p>
            </div>
         
          </div>
     
        </div>
      </div>
    </div>
  );
}

export default UserLogin;

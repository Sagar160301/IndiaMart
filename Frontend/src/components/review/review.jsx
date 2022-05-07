import CheckIcon from "@mui/icons-material/Check";
import MailLockIcon from "@mui/icons-material/MailLock";
import MessageIcon from "@mui/icons-material/Message";
import { useNavigate } from "react-router-dom";
import "./review.css";

export const Review = () => {
  const navigate = useNavigate();
  return (
    <div className="review">
      <div id="Review">
        <div id="top">
          <div>
            <CheckIcon /> <h2>Thank You!</h2>
          </div>
          <p>IndiaMART has received your requirement</p>
          <p>
            Verify your email <b>s********@gmail.com </b> as suppliers are more
            likely to contact verified buyers.
          </p>
        </div>
        <div id="middle">
          <div>
            <p>
              Want to add/edit your details to your <br />
              requirement? Do it here:
            </p>
            <button id="btn1">
              <MessageIcon />
              <p>Manage your Requirement</p>
            </button>
          </div>
          <div>
            <p>
              Grow your business by selling on <br />
              Indiamart for free
            </p>
            <button id="btn2">
              <MailLockIcon />
              <p>Sell on IndiaMart</p>
            </button>
          </div>
          <div>
            <p>
              Protect your payment for Free,pay <br />
              sellers online via pay with INDIAMART
            </p>
            <img src="" alt="" />
          </div>
        </div>
        <div id="bottom"></div>
        <button
          id="homeButton"
          onClick={() => {
            // navigate("/");
          }}
        >
          Go to Home..
        </button>
      </div>
    </div>
  );
};

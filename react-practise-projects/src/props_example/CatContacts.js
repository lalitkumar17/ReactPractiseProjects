import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import "./cat_contacts.css";

function CatContacts({ image, name, mobile, email }) {
  return (
    <div className="contact-card">
      <img src={image} alt="contact-one" />
      <div className="info-area">
        <h1>{name}</h1>
        <div className="info-area__mobile-number">
          <CallIcon />
          <p>{mobile}</p>
        </div>
        <div className="info-area__email-address">
          <MailIcon />
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
}

export default CatContacts;

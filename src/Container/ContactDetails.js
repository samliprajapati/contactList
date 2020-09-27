import { Button } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import FavoriteContact from "./FavouriteContact";
import { withRouter } from "react-router-dom";
function ContactDetails(props) {
  const [contactById, setContactById] = useState({});
  const [favourite, setFavourite] = useState({});
  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users/${props.match.params.id}`)
      .then((res) => {
        setContactById(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  function AddFavourite(contact) {
    setFavourite(contact);
    localStorage.setItem("favourite", JSON.stringify(contact));
  }
  return (
    <div className="Main">
      <div className="MainBox">
        <div className="Details_box">
          <div>
            <Avatar size={100} src={contactById.avatar} />
          </div>
          <div className="contact-name">{`${contactById.first_name || ""} ${
            contactById.first_name || ""
          }`}</div>
          <div>{contactById.email}</div>
          <Button
            type="primary"
            danger
            onClick={() => AddFavourite(contactById)}
          >
            Add Favourite
          </Button>
          <Link to="/favourite">
            <div>Go to Favourate page</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default withRouter(ContactDetails);

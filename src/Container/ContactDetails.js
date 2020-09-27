import { Button, message } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import axios from "axios";
import { RollbackOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";

function ContactDetails(props) {
  const [contactById, setContactById] = useState({});
  const [favouritContact, setFavouriteContact] = useState(
    JSON.parse(localStorage.getItem("favouritecontact")) || []
  );
  console.log(favouritContact);
  localStorage.setItem(
    "favouritecontact",
    JSON.stringify(favouritContact || [])
  );

  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users/${props.match.params.id}`)
      .then((res) => {
        setContactById(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [props.match.params.id]);
  function AddFavourite(contact) {
    console.log(contact);
    message.success("successfully Added on favourite list");
    setFavouriteContact([...favouritContact, contact]);
  }
  return (
    <div className="Main">
      <div className="MainBox">
        <div className="Details_box">
          <div className="avtar-contactDetails">
            <Avatar size={100} src={contactById.avatar} />
          </div>
          <div className="contact-name">{`${contactById.first_name || ""} ${
            contactById.first_name || ""
          }`}</div>
          <div className="contact-email">{contactById.email}</div>
          <div className="button">
            <Button
              type="primary"
              danger
              onClick={() => AddFavourite(contactById)}
            >
              Add Favourite
            </Button>
          </div>
          <Link to="/">
            <div>
              <RollbackOutlined />
              &nbsp;&nbsp; Back to Contact List
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default withRouter(ContactDetails);

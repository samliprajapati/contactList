import { Button, message } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import axios from "axios";

import React, { useEffect, useState } from "react";

import { withRouter } from "react-router-dom";
function ContactDetails(props) {
  const [contactById, setContactById] = useState({});

  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users/${props.match.params.id}`)
      .then((res) => {
        setContactById(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [props.match.params.id]);
  function AddFavourite(contact) {
    message.success("successfully Added on favourite list");
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
        </div>
      </div>
    </div>
  );
}
export default withRouter(ContactDetails);

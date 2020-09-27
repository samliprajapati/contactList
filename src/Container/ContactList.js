import { Button } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { withRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import ContactDetails from "./ContactDetails";

function ContactList(props) {
  const [contact, setContact] = useState([]);
  useEffect(() => {
    axios
      .get("https://reqres.in/api/users")
      .then((res) => {
        setContact(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(contact);
  return (
    <div className="Main">
      <div className="MainBox">
        <Button shape="circle" icon={<SearchOutlined />} />{" "}
        {contact.map((item) => {
          return (
            <div
              className="Box"
              onClick={() => props.history.push(`contact/${item.id}`)}
            >
              <div className="content">
                <div className="Avtar">
                  <Avatar size={40} src={item.avatar} />
                </div>
                <div className="contact-content">
                  <div className="contact-name">{`${item.first_name || ""} ${
                    item.last_name || ""
                  }`}</div>
                  <div>{item.email}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default withRouter(ContactList);

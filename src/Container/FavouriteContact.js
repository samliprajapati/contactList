import { Button } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { createBrowserHistory } from "history";
import ContactDetails from "./ContactDetails";

function FavoriteContact(props) {
  const current = [localStorage.getItem("favourite")];

  return (
    <div className="Main">
      <div className="MainBox">
        <Button shape="circle" icon={<SearchOutlined />} />{" "}
        {current.map((item) => {
          return (
            <div className="Box">
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
export default FavoriteContact;

import React, { useEffect, useMemo, useState } from "react";
import Avatar from "antd/lib/avatar/avatar";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Search from "antd/lib/input/Search";

function ContactList(props) {
  const [contact, setContact] = useState([]);
  const [filterContactValue, setFilterContactValue] = useState("");
  useEffect(() => {
    axios
      .get("https://reqres.in/api/users")
      .then((res) => {
        setContact(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const filteredContact = useMemo(() => {
    return 
    });
  }, [filterContactValue]);

  function handleSearch(value) {
    debugger;
    setFilterContactValue(value);
   
      contact.filter(() => {
        return setContact(contact.first_name.toLowerCase().includes(filterContactValue.toLowerCase)) 
      })
   
    console.log(filterContactValue);
  }
  console.log(contact);
  return (
    <div className="Main">
      <div className="MainBox">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "10px",
          }}
        >
          <Search
            style={{ width: 200 }}
            placeholder="input search text"
            onSearch={(value) => handleSearch(value)}
            enterButton
          />
        </div>
        <Link to="/favourite">
          <div style={{ color: "white", paddingLeft: "10px" }}>
            Go to Favourate page
          </div>
        </Link>
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

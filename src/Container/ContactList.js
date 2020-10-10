import React, { useEffect, useMemo, useState } from "react";
import Avatar from "antd/lib/avatar/avatar";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { Input } from "antd";

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
    return filterContactValue === ""
      ? contact
      : contact.filter((contact) => {
          debugger;
          return contact.first_name
            .toLowerCase()
            .includes(filterContactValue.toLowerCase());
        });
  }, [filterContactValue, contact]);
  console.log(filteredContact);

  function handleChange(e) {
    setFilterContactValue(e.target.value);

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
          {/* <Search
            style={{ width: 200 }}
            placeholder="input search text"
            onSearch={(value) => handleSearch(value)}
            enterButton
          /> */}
          <Input
            placeholder="input search text"
            onChange={handleChange}
            style={{ width: "50%", marginRight: "10px" }}
          />
        </div>
        <Link to="/favourite">
          <div style={{ color: "white", paddingLeft: "10px" }}>
            Go to Favourate page
          </div>
        </Link>
        {filteredContact.map((item) => {
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

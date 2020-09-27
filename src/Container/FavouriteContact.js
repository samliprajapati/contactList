import React from "react";

import Avatar from "antd/lib/avatar/avatar";

function FavoriteContact(props) {
  const current = [JSON.parse(localStorage.getItem("favourite"))];
  console.log(current);

  return (
    <div className="Main">
      <div className="MainBox">
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

import { React } from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";

function ProfileList({ onScroll, listInnerRef, userList }) {
  return (
    <div>
      <div
        onScroll={onScroll}
        ref={listInnerRef}
        style={{ height: "100vh", overflowY: "auto" }}
      >
        {userList.map((item, index) => {
          return (
            <div key={index}>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  "& > :not(style)": {
                    m: 2,
                    width: 300,
                    height: 250,
                    padding: 2,
                  },
                }}
              >
                <Paper elevation={3}>
                  <Avatar
                    alt={item.name.first}
                    src={item.picture.large}
                    sx={{ width: 60, height: 60 }}
                  />

                  <p>
                    Name: {item.name.first} {item.name.last}
                  </p>
                  <p>Email: {item.email}</p>
                  <p>Phone no: {item.cell}</p>
                  <p>Gender {item.gender}</p>
                  <p>
                    Address: {item.location.city}, {item.location.country}
                  </p>
                </Paper>
              </Box>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProfileList;

import { AppBar, Box, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [value, setValue] = useState(0);

  return (
    <div>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h3">Mern Auth</Typography>
          <Box sx={{ marginLeft: "auto" }}>
            <Tabs
              indicatorColor="secondary"
              onChange={(e, val) => {
                setValue(val);
              }}
              value={value}
              textColor="inherit"
            >
              <Tab to="/login" LinkComponent={Link} label="Login" />
              <Tab to="/signup" LinkComponent={Link} label="Signup" />
            </Tabs>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

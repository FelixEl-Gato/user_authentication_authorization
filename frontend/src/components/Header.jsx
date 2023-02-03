import { AppBar, Box, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { useState } from "react";

export const Header = () => {
  const [value, setValue] = useState();

  return (
    <div>
      <AppBar>
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
              <Tab label="Login" />
              <Tab label="Signup" />
            </Tabs>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

import { AppBar, Box, Tab, Tabs, Toolbar, Typography } from "@mui/material";

export const Header = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant="h3">Mern Auth</Typography>
          <Box sx={{ marginLeft: "auto" }}>
            <Tabs textColor="inherit">
              <Tab label="Login" />
              <Tab label="Signup" />
            </Tabs>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

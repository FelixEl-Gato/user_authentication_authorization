import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

function Signup() {
  const handleSubmit = (e) => {};

  return (
    <div>
      <Typography>Signup</Typography>
      <form onSubmit={handleSubmit}>
        <Box
          marginLeft="auto"
          marginRight="auto"
          width={300}
          display="flex"
          flexDirection={"column"}
          justifyContent="center"
          alignItems="center"
        >
          <TextField margin="normal" />
          <TextField margin="normal" />
          <TextField margin="normal" />
          <Button type="submit"> Signup</Button>
        </Box>
      </form>
    </div>
  );
}

export default Signup;

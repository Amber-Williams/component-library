import Card from "@mui/material/Card";
import * as React from "react";

export default ({ children }: { children: React.ReactNode }) => {
  return (
    <Card
      square={false}
      elevation={3}
      sx={{
        bgcolor: "background.paper",
        p: 2,
        my: 10,
      }}
    >
      {children}
    </Card>
  );
};

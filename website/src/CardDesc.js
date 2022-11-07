import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const CardDesc = () => {
  return (
    <div>
      <Card
        style={{
          display: "inline-block",
          backgroundColor: "rgb(0, 71, 255, 1)",
        }}
      >
        <CardContent>
          <Typography>Hello</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardDesc;

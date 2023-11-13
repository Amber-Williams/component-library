import Card, { CardProps } from "@mui/material/Card";

export default (props: CardProps) => {
  return (
    <Card
      square={false}
      elevation={3}
      sx={{
        ...(props.sx ? props.sx : {}),
        bgcolor: "background.paper",
        p: 2,
      }}
      {...props}
    >
      {props.children}
    </Card>
  );
};

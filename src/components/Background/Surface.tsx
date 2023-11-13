import { useTheme } from "@mui/material";

const Surface = ({ children }: { children: React.ReactNode }) => {
  const { zIndex } = useTheme();

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: zIndex.surface,
      }}
    >
      {children}
    </div>
  );
};
export default Surface;

import { useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";

import LinearProgress, {
  linearProgressClasses,
  LinearProgressProps,
} from "@mui/material/LinearProgress";

const SBorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[100],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor:
      theme.palette.mode === "dark"
        ? theme.palette.secondary.light
        : theme.palette.secondary.light,
  },
}));

/**
 *
 * @param value 0-100
 */
export const BorderLinearProgress = (props: LinearProgressProps) => {
  const theme = useTheme();

  return (
    <SBorderLinearProgress variant="determinate" {...props} theme={theme} />
  );
};

import { useTheme } from "@mui/material";
import { css, styled } from "@mui/material/styles";

import Chip, { ChipProps } from "@mui/material/Chip";

interface IChipProps extends Omit<ChipProps, "variant"> {
  variant: "filled" | "outlined" | "outlined-low-fill";
  theme?: any;
  isSquare?: true;
}

const addTransparency = (hexColor: string, opacity: number) => {
  const _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
  return hexColor + _opacity.toString(16).toUpperCase();
};

const getChipStyle = ({
  theme,
  color,
  variant,
  isSquare,
  onClick,
}: IChipProps) => {
  let _color = color;
  if (color && theme.palette[color]) {
    _color = theme.palette[color].main;
  }

  if (_color && variant === "outlined-low-fill") {
    return css`
      color: ${_color};
      border: 1px solid ${_color};
      background-color: ${addTransparency(_color, 0.2)};
      ${isSquare && `border-radius: ${theme.shape.borderRadius}px;`}
      ${onClick &&
      css`
        &:hover {
          background-color: ${addTransparency(_color, 0.4)};
        }
      `}
    `;
  }
};

const SChip = styled(Chip)<IChipProps>(
  ({ theme, color, variant, isSquare }) => ({
    ...getChipStyle({ theme, color, variant, isSquare }),
  })
);

export default (props: IChipProps) => {
  const theme = useTheme();

  // @ts-ignore
  return <SChip {...props} theme={theme} />;
};

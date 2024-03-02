import gradient from "gradient-string";
import {TITLE_TEXT} from "../consts";
import {LOGO_INTRO} from "../consts";
import color from "picocolors";
// colors brought in from vscode poimandres theme
const poimandresTheme = {
  blue: "#add7ff",
  cyan: "#89ddff",
  green: "#5de4c7",
  magenta: "#fae4fc",
  red: "#d0679d",
  yellow: "#fffac2",
};

const gradientColors = Object.values(poimandresTheme);

export const renderTitle = () => {
  const wGradient = gradient(gradientColors);

  console.log(wGradient.multiline(TITLE_TEXT));
};

export const renderIntro = () => {
  const wGradient = gradient(gradientColors);
  console.log(wGradient(LOGO_INTRO) + "\n");
  console.log(`${color.green(`▶️ This utility will walk you through creating a new project.\n`)}`);
};

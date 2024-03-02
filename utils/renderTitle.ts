import gradient from "gradient-string";
import color from "picocolors";
import {TITLE_TEXT, LOGO_INTRO} from "../consts";


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

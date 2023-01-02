import { buildLegacyTheme } from "sanity";

const props = {
  "--my-white": "#fdfdfd",
  "--my-black": "#282828",
  "--brand-primary": "#20b46a",
  "--my-red": "#db4437",
  "--my-yellow": "#f4b400",
  "--my-green": "#20b46a"
}

export const myTheme = buildLegacyTheme({
  "--black": props["--my-black"],
  "--white": props["--my-white"],

  "--gray": "#666",
  "--gray-base": "#666",

  "--component-bg": props["--my-black"],
  "--component-text-color": props["--my-white"],

  "--brand-primary": props["--brand-primary"],

  "--default-button-color": "#666",
  "--default-button-primary-color": props["--brand-primary"],
  "--default-button-success-color": props["--my-green"],
  "--default-button-warning-color": props["--my-yellow"],
  "--default-button-danger-color": props["--my-red"],

  "--state-info-color": props["--brand-primary"],
  "--state-warning-color": props["--my-yellow"],
  "--state-danger-color": props["--my-red"],
  "--state-success-color": props["--my-green"],

  "--main-navigation-color": props["--my-black"],
  "--main-navigation-color--inverted": props["--my-white"],

  "--focus-color": props["--brand-primary"],
})
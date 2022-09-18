import "./switchButton.css";
import SettingsBrightnessIcon from "@material-ui/icons/SettingsBrightness";

export default function SwitchButton() {
  let clickedClass = "clicked";
  const body = document.body;
  const lightTheme = "light";
  const darkTheme = "dark";
  let theme;

  if (localStorage) {
    theme = localStorage.getItem("theme");
  }
  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme);
  } else {
    body.classList.add(darkTheme);
  }

  const switchTheme = (e) => {
    if (theme === lightTheme) {
      body.classList.replace(lightTheme, darkTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("theme", "dark");
      theme = darkTheme;
    } else {
      body.classList.replace(darkTheme, lightTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("theme", "light");
      theme = lightTheme;
    }
  };

  return (
    <div className="darkmode-button-container">
      <button
        onClick={(e) => switchTheme(e)}
        id="darkmode-button"
        className={theme === "dark" ? clickedClass : ""}
      >
        <SettingsBrightnessIcon
          fontSize="large"
          color="primary"
          className="image-in-darkmode-button"
        />
      </button>
    </div>
  );
}

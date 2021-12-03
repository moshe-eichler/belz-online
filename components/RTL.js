import React, { PureComponent } from "react";
import PropTypes from "prop-types";
// Redux
import { connect } from "react-redux";
// CSS
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { create } from "jss";
import rtl from "jss-rtl";
import JssProvider from "react-jss/lib/JssProvider";
import { createGenerateClassName, jssPreset } from "@material-ui/core/styles";

// Theme
import { themeObject } from "./styling/theme";

// Helpers
import get from "lodash/get";
// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const generateClassName = createGenerateClassName();

const G_isRtl = document.body.getAttribute("dir") === "rtl";

class RTL extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
      PropTypes.node
    ]),
    language: PropTypes.object
  };

  render() {
    const { children, language } = this.props;
    const isRtl = get(language, "rtl", G_isRtl);

    const theme = createMuiTheme({
      ...themeObject,
      direction: isRtl ? "rtl" : "ltr"
    });

    return (
      <JssProvider jss={jss} generateClassName={generateClassName}>
        <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
      </JssProvider>
    );
  }
}

const mapStateToProps = ({ classified }) => ({
  language: classified.language
});
export default connect(mapStateToProps)(RTL);
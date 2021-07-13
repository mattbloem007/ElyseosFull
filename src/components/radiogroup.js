import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

class RadioGroup extends React.Component {
  render() {
    const {
      Component,
      name,
      children,
      ...rest
    } = this.props;
    return (
      <Component role="radiogroup" {...rest} name={name}>
        {React.Children.map(children, element =>
          React.cloneElement(element, {
            ...element.props,
            name
          })
        )}
      </Component>
    );
  }
}

export default RadioGroup

RadioGroup.propTypes = {
  name: PropTypes.string,
  Component: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.object
  ])
};

RadioGroup.defaultProps = {
  name: "",
  selectedValue: "",
  Component: "div"
};

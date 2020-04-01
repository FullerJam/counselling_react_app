import PropTypes from "prop-types"
import styled from "styled-components"
import theme from "../config/theme.js"

const MenuTile = styled.div`
background-color:${props => props.color};
font-family:${theme.typography.fontFamily};
min-height:150px;
border-radius:5px;
padding: 3%;
margin: 1.5% auto;
h4{
  color:white;
  text-decoration:none;
}
img{
  max-height:70px
}
`;

MenuTile.propTypes = {
  color: PropTypes.string,
};

MenuTile.defaultProps = {
  color: "#1B9AAA"
};

export default MenuTile;

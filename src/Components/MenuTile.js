import PropTypes from "prop-types";
import styled from "styled-components";


const MenuTile = styled.div`
background-color:${props => props.color};
min-width:310px;
max-width:500px;
border-radius:5px;
padding: 3%;
margin: 1.5% auto;
`;

MenuTile.propTypes = {
  color: PropTypes.string
};

MenuTile.defaultProps = {
  color: "#1B9AAA"
};

export default MenuTile;

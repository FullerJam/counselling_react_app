import React from "react"
import theme from "../config/theme.js"
import PropTypes from "prop-types"
import styled from "styled-components"
import { motion } from "framer-motion"



function Button(props) {
    const { onClick, text, m } = props;

    const StyledButton = styled.button`
        background-color:${({ theme }) => theme.colors.pink};
        color:white;
        border:0;
        margin:${props => props.m};
        border-radius:5px;
        padding:10px;
        width:180px;
        font-weight:800;
        &:hover {
        background-color: palevioletred;
        color: white;
        }
    `


    return (
        <React.Fragment>
            <StyledButton onClick={onClick} m={m}>
                <motion.div whileHover={{ scale: 1.03 }}>
                    {text}
                </motion.div>
            </StyledButton>
        </React.Fragment>
    );
}

Button.propTypes = {
};

export default Button;
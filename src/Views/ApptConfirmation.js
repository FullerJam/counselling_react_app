import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { motion } from "framer-motion"
import Button from "../Components/Button"

const StyledWrapper = styled.div`
    max-width:1000px;
    margin:10vh auto;
    text-align:center;
`

const StyledImg = styled.div`
    width:94px;
    height:94px;
    margin:0 auto;
`

const StyledH3 = styled.h3`
    color: ${({ theme }) => theme.colors.pink};
`

function ApptConfirmation(props) {

    const {variants} = props
    return (
        <React.Fragment>
            <motion.div initial="out" animate="in" exit="out" variants={variants}>
            <StyledWrapper>
                <StyledImg>
                    <img src="" alt="person" />
                </StyledImg>
                <StyledH3>Use your social to sign in</StyledH3>
                
                <Button text={"text"}>
                    
                </Button>
            </StyledWrapper>
        </motion.div>
        </React.Fragment>
    )
}

ApptConfirmation.propTypes = {

}

export default ApptConfirmation


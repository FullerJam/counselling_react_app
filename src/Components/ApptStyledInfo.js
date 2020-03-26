import React from "react"
import theme from "../config/theme.js"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "react-router-dom"

import ApptTile from "../Components/ApptTile"
import tick from "../assets/tick.svg"


const StyledInfoCircle = styled.div`
    background-color: ${({ theme }) => theme.colors.pink};
    position:absolute;
    left:calc(50% - 58px);
    top:200px;
    width: 118px;
    text-align:center;
    height: 118px;
    border-radius: 50%;
    display:flex;
    justify-content:center;
    align-items:center;
    p{
      line-height: 1.6;
      color:white;
      font-weight:bold;
    }
`

const StyledContentWrapper = styled.div`
    max-width:344.56px;
    border-radius:5px;
    margin: 0 auto;
    p{
      margin:10px 0px 40px;
      line-height: 1.6;
    }
`

const StyledBackground = styled.div`
    width: 100%;
    height: 300px;
    background-color:${({ theme }) => theme.colors.lightPurple};
    border-radius:100% 100% 0 0;
    margin:150px auto 40px;
    text-align:center;
    max-width:1000px;
`

const StyledButton = styled.button`
    background-color:${({ theme }) => theme.colors.pink};
    color:white;
    border:0;
    margin-top:260px;
    border-radius:5px;
    padding:10px;
    width:180px;
    font-weight:800;
`

const StyledImageWrapper = styled.div`
    position: absolute;
    left:calc(50% - 38px);
    top:375px;
    img{
        max-height:40px;
        max-width:40px;
    }
    p{
        line-height: 1.6;
        margin:0;
        color:white;
    }

`

function ApptStyledInfo(props) {

    return (
        <div>
            <StyledContentWrapper>

            </StyledContentWrapper>
            <StyledBackground>
                <StyledInfoCircle>
                    <p>Total Booked <br />4</p>
                </StyledInfoCircle>
                <StyledImageWrapper>
                    <img src={tick} alt="reward tick" />
                    <p>Completed <br /> 02</p>
                </StyledImageWrapper>
                <StyledButton>
                    BOOK AN<br />APPOINTMENT
                    </StyledButton>
            </StyledBackground>
            <ApptTile/>
            
        </div>
    );
}

ApptStyledInfo.propTypes = {
};

export default ApptStyledInfo;
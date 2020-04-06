import React from "react"
import theme from "../config/theme.js"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "react-router-dom"

import moment from "moment"

import avatarIcon from "../assets/avatar_placeholder.png"


const StyledIconCircle = styled.div`
    height:25px;
    width:25px;
    margin-right:15px;
    display:flex;
    justify-content:center;
    align-items:center;
    img{
    border-radius:50%;
    height:40px;
    width:40px;
    }
`
const StyledFriendsWrapper = styled.div`
    width:100%;

`
const StyledContactWrapper = styled.div`
        transition: all 0.5s ease-in-out;
        display:${({ open }) => (open ? "flex" : "none")};
        width:100%;
        padding:10px;
        margin-left:20px;
        h6{
            color:grey;
            margin:5px 0;
            padding:0px;
        }
        
    `


function FriendTile(props) {
    const { friends, open } = props

    // const { getUsers } = props

    return (
        <div>
            <StyledFriendsWrapper>
                {friends.map(friend =>
                    <StyledContactWrapper open={open}>
                        <StyledIconCircle>
                            <img src={friends.avatar || avatarIcon} alt="avatar" />
                        </StyledIconCircle>
                        <h6>{friend.email}</h6>
                    </StyledContactWrapper>
                )}
            </StyledFriendsWrapper>
        </div>

    )

}

export default FriendTile
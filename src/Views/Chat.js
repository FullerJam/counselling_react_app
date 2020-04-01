import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { motion } from "framer-motion"

const ContentWrapper = styled.div`
  background-color:#e5e5e5;
  height:85vh;
  width:100%;
  margin:0 auto;
  max-width:1000px;
  position: relative;
  textarea{
      width:85%;
      margin:0 auto;
      position:absolute;
      bottom:0;
      left:calc(6%);
      font-size:16px;
      font-family:"Poppins";
      padding:15px;
  }
  textarea::placeholder {
    font-size:16px;
    font-family:"Poppins";
  }
  @media(max-width:1020px){
    max-width:560px;
  }
  @media(max-width:580px){
    max-width:300px;
  }
`

function Chat(props) {

    const { variant } = props;
    return (
        <React.Fragment>
            <ContentWrapper>
                
                <textarea
                    rows="3"
                    placeholder="Type something here..."
                // onChange={handleChangeAndEnter}
                // onKeyPress={handleChangeAndEnter}
                // value={comment}
                ></textarea>
            </ContentWrapper>
        </React.Fragment>
    )
}

Chat.propTypes = {

}

export default Chat


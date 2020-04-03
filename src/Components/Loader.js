import React from 'react'
import Loader from 'react-loader-spinner'
import styled from 'styled-components'

const StyledWrapper = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`
export default class App extends React.Component {
    //other logic
    render() {
        return (
            <StyledWrapper>
                <Loader
                type="TailSpin"
                color="#FD749B"
                height={50}
                width={50}
                timeout={3000} //3 secs

            />
            </StyledWrapper>
        );
    }
}
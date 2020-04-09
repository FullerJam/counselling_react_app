import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import { motion } from "framer-motion"
import healthimg from "../assets/health.png"

const StyledWrapper = styled.div`
    max-width:1000px;
    margin:0 auto;
    @media(max-width:1000px){
        padding:0 25px;
        margin-top:30px;
    }
`

const StyledImg = styled.div`
    
    margin-top:10px;
    max-width:100%;
    img{
        height: auto;
        width:100%
    }
`

const StyledH3 = styled.h3`
    color: ${({ theme }) => theme.colors.pink};
  `;

const StyledLink = styled(Link)`
        text-align: center;
        text-decoration: none;
        h3{
            color:${({ theme }) => theme.colors.pink};
        }
        h3:hover{
            color:#e06588;
        }
    `

function MentalHealthAdvice(props) {
    const { variants } = props
    return (
        <motion.div initial="out" animate="in" exit="out" variants={variants}>
            <StyledWrapper>
                <StyledImg>
                    <img src={healthimg} alt="people_waving" />
                </StyledImg>
                <StyledH3><u>Mental Health Advice</u></StyledH3>
                <p><b>Covid-19 and Therapy and Mental Health team</b></p>
                <p>Updated 31/3/2020:</p>
                <p>Please be aware that the University Therapy and Mental Health team are working remotely.  We will be offering telephone appointments in place of face-to-face sessions, and can receive and respond to emails and submitted Self-Referral forms.</p>
                <p>All students currently on our waiting list are being contacted to offer them the option to have telephone appointments.</p>
                <p>If you would like an appointment please complete our <Link to="https://portal.solent.ac.uk/portal-apps/counselling/counselling-form.aspx">online Self-Referral form</Link> .  If you have any difficulties with the online link, please use the Word version of the form, which you can find on the Self-Referral form portal page.</p>
                <p>Mental Health Support:</p>
                <p>Due to the limited support we are able to deliver as a Service our Mental Health Adviser’s role will be restricted to; liaison, advocacy and signposting support.  Please do not hesitate to email us if you would like to discuss your support needs.  If you feel you could benefit from this support from our Mental Health Adviser please do complete the Self-Referral form (stating you would like to speak with the Mental Health Adviser).</p>
                <p>Please do not hesitate to contact us if you do have any questions or concerns.  As the situation is constantly changing, please check our page regularly for any updates.</p>
                <br />
                <p>We hope you enjoy your time at Solent University and would like you to know that the Therapy and Mental Health Team is available to help if you are experiencing difficulties during your time here. </p>
                <p>We offer a variety of support, including Talking Therapy (SST, Counselling, Fiction Prescription and CBT), Hypnotherapy and Mental Health Advice. </p>
                <p><b>Self Help</b></p>
                <p><Link to="http://www.ntw.nhs.uk/pic/selfhelp">Self Help Guides</Link> produced by Northumberland, Tyne and Wear NHS Foundation Trust cover a range of mental health issues, including:</p>

                <ul>
                    <li>Alcohol</li>
                    <li>Anxiety</li>
                    <li>Bereavement</li>
                    <li>Controlling anger</li>
                    <li>Depression and low mood</li>
                    <li>Eating disorders</li>
                    <li>Domestic violence</li>
                    <li>Hearing voices</li>
                    <li>Obsessions and compulsions</li>
                    <li>Panic</li>
                    <li>Postnatal depression</li>
                    <li>Post traumatic stress</li>
                    <li>Self harm</li>
                    <li>Shyness and social anxiety</li>
                    <li>Sleep</li>
                    <li>Stress</li>
                    <li>Abuse</li>
                </ul>

                <p><b>Useful Links</b></p>
                <ul>
                    <li>Alcohol - <Link to="http://www.alcoholics-anonymous.org.uk/">Alcoholics Anonymous</Link></li>
                    <li>Anxiety - <Link to="http://www.anxietybc.com/">AnxietyBC</Link></li>
                    <li>AIDS/HIV - <Link to="http://www.nat.org.uk/">National Aids Trust</Link></li>
                    <li>Anger Management - <Link to="http://www.angermgmt.com/anger-toolkit/anger-toolkit/">Angermgmt.com</Link></li>
                    <li>Bereavement - <Link to="http://www.crusebereavementcare.org.uk/">Cruse Bereavement Care</Link></li>
                    <li>Depression - <Link to="http://www.depressionalliance.org/">Depression Alliance</Link></li>
                    <li>Domestic Violence  - <Link to="http://www.womensaid.org.uk/">Womans Aid</Link></li>
                    <li>Drugs - <Link to="http://www.ukna.org/">Narcotics Anonymous</Link></li>
                    <li>Eating Disorders  - <Link to="http://www.edauk.com/">Eating Disorder Association</Link></li>
                    <li>General Mental Health - <Link to="http://www.mind.org.uk/">Mind</Link></li>
                    <li>Phobias - <Link to="http://www.phobics-society.org.uk/">Phobics Society</Link></li>
                    <li>Rape - <Link to="http://www.rapecrisis.org.uk/">Rape Crisis</Link></li>
                    <li>Schizophrenia - <Link to="http://www.rethink.org/">Rethink</Link></li>
                    <li>Sexual Abuse - <Link to="http://www.survive.org.uk/">Survive</Link></li>
                    <li>Stress - <Link to="http://www.isma.org.uk/">International Stress Management Association</Link></li>
                    <li>Self-Injury - <Link to="http://www.selfharm.org.uk/">Young People and Self Harm</Link></li>
                    <li>Sleep - <Link to="http://www.sleepnet.com/">Sleep Net</Link></li>
                    <li>Sexuality - <Link to="http://www.llgs.org.uk/">London Lesbian and Gay Switchboard</Link></li>
                </ul>
            </StyledWrapper>
        </motion.div>

    )
}

MentalHealthAdvice.propTypes = {

}

export default MentalHealthAdvice


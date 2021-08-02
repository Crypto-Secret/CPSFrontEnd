import React, { useCallback, useEffect, useState } from 'react'

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardIcon,
  Container,
  Separator,
  Spacer,
} from 'react-neu'
import styled from 'styled-components'

import StartPage from 'components/StartPage'
import StartPageHeader from 'components/StartPageHeader'
import StartSplit from 'components/StartSplit'


import TheDefiantIcon from 'components/icons/TheDefiantIcon'
import TheRegisterIcon from 'components/icons/TheRegisterIcon'

const ASTRONAUTS = [
  '👨‍🚀',
  '👨🏻‍🚀',
  '👨🏼‍🚀',
  '👨🏽‍🚀',
  '👨🏾‍🚀',
  '👩‍🚀',
  '👩🏻‍🚀',
  '👩🏼‍🚀',
  '👩🏽‍🚀',
  '👩🏾‍🚀‍',
  '👩🏿‍🚀'
]

const Start: React.FC = () => {
  const [astronaut, setAstronaut] = useState('👨‍🚀')

  const updateAstronaut = useCallback(() => {
    const newAstro = ASTRONAUTS[Math.floor(Math.random()*ASTRONAUTS.length)]
    setAstronaut(newAstro)
  }, [setAstronaut])

  useEffect(() => {
    const refresh = setInterval(updateAstronaut, 1000)
    return () => clearInterval(refresh)
  }, [updateAstronaut])

  return (
    <StartPage>
      <StyledHero>
        <StartPageHeader
          icon={`${astronaut}❤️🍠`}
          subtitle="Grow your Wallet, open participation, and inclusive community."
          title="Fair finance by the people, for the people."
        />
        <Container size="lg">
          <Box row justifyContent="center">
            <Button text="Buy Token" to="https://dex.guru/token/0x8e8014ab4e87ef2c5d12b455ff0c4f88ae84b274-bsc" />
            <Spacer />
            <Button text="Join the Community" href="https://discord.gg/6GqfwVgqf8" variant="secondary" />
          </Box>
        </Container>
      </StyledHero>
      <Container size="lg">
        <Spacer size="lg" />
        <Separator />
        <Spacer size="lg" />
        <StyledSectionIcon>⚖️</StyledSectionIcon>
        <Spacer size="lg" />
        <StyledSectionTitle>Fair finance for everyone.</StyledSectionTitle>
        <StyledSectionDescription>CryptoSecret Finance is owned and controlled by our community of CPS token holders.</StyledSectionDescription>
        <Spacer size="lg" />
        <StartSplit>
          <Card>
            <Spacer size="md" />
            <CardIcon>💸</CardIcon>
            <CardContent>
              <StyledCardName>Growing treasury</StyledCardName>
              <Spacer size="sm" />
              <StyledCardDescription>The CPS treasury is Young and growing fast.</StyledCardDescription>
            </CardContent>
            <CardActions>
              <Box row justifyContent="center">
                <Button text="View treasury" variant="secondary" to="#" />
              </Box>
            </CardActions>
          </Card>
          <Card>
            <Spacer size="md" />
            <CardIcon>👨‍🌾</CardIcon>
            <CardContent>
              <StyledCardName>Yield farming</StyledCardName>
              <Spacer size="sm" />
              <StyledCardDescription>Earn CPS Token while helping CPS grow too.</StyledCardDescription>
            </CardContent>
            <CardActions>
              <Box row justifyContent="center">
                <Button text="Start farming" variant="secondary" to="#" />
              </Box>
            </CardActions>
          </Card>
          <Card>
            <Spacer size="md" />
            <CardIcon>🗣️</CardIcon>
            <CardContent>
              <StyledCardName>Decentralized governance</StyledCardName>
              <Spacer size="sm" />
              <StyledCardDescription>CPS holders decide CPS's future via on-chain voting.</StyledCardDescription>
            </CardContent>
            <CardActions>
              <Box row justifyContent="center">
                <Button text="Go vote" variant="secondary" to="#" />
              </Box>
            </CardActions>
          </Card>
        </StartSplit>
        <Spacer size="lg" />
        <Separator />
        <Spacer size="lg" />
        
      </Container>
    </StartPage>
  )
}

const StyledHero = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(80vh - 96px);
  max-height: 600px;
  min-height: 400px;
`

const StyledCardName = styled.div`
  color: ${props => props.theme.textColor};
  font-size: 24px;
  font-weight: 700;
  text-align: center;
`

const StyledCardDescription = styled.div`
  color: ${props => props.theme.colors.grey[500]};
  font-size: 16px;
  min-height: 56px;
  text-align: center;
`
const StyledSectionDescription = styled.h3`
  color: ${(props) => props.theme.textColor};
  font-size: 18px;
  opacity: 0.66;
  font-weight: 400;
  text-align: center;
`

const StyledSectionTitle = styled.div`
  color: ${props => props.theme.colors.primary.main};
  font-size: 36px;
  font-weight: 700;
  margin: 0;
  padding: 0;
  text-align: center;
`

const StyledSectionIcon = styled.div`
  font-size: 64px;
  text-align: center;
`

const StyledLogo = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  opacity: 0.66;
`

export default Start

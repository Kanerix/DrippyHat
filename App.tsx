import React, { ReactElement, useState } from 'react'
import Slider from '@react-native-community/slider'
import { SafeAreaView, View } from 'react-native'
import styled from 'styled-components/native'
import SvgHelmet from './assets/helmet.svg'

const StyledView = styled.View`
    height: 100%;
    color: white;
`

const StyledHeader = styled.Text`
    margin-top: 16px;
    margin-left: 16px;
    margin-right: 16px;
    margin-bottom: 8px;
    font-size: 28px;
    font-weight: bold;
    text-align: center;
`

const StyledContainer = styled.View`
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const StyledColumn = styled.View`
    display: flex;
    justify-content: center; 
    align-items: center;
    bottom: -10px;
`;

const StyledSvgHelmet = styled(SvgHelmet)`
    width: 75%;
    height: 75%;
    position: absolute;
`

interface ButtonProps {
    marginRight: number
    marginLeft: number
}

const StyledButton = styled.TouchableOpacity<ButtonProps>`
    padding-top: 8px;
    padding-bottom: 8px;
    margin-left: ${props => props.marginLeft}px;
    margin-right: ${props => props.marginRight}px;
`

const StyledSubheader = styled.Text`
    margin: 16px;
    font-size: 16px;
    text-align: center;
`

const StyledSlider = styled(Slider)`
    margin-left: 16px;
    margin-right: 16px;
    margin-bottom: 32px;
`

const App = () => {
    const [intesity, setIntensity] = useState<number>(0)
    const [buttons, setButtons] = useState<{
        [key: string]: boolean
    }>({
        button1: false,
        button2: false,
        button3: false,
        button4: false,
        button5: false,
        button6: false,
    })

    const CoulmnOne: ReactElement[] = []
    const CoulmnTwo: ReactElement[] = []

    Object.keys(buttons).forEach((button, index) => {
        const Element = (
            <StyledButton
                marginRight={index === 2 ? 64 : 0}
                marginLeft={index === 3 ? 64 : 0}
                onPress={() => {
                    setButtons(old => ({
                        ...old,
                        [button]: !old[button],
                    }))
                }}
                key={index}
            >
                <StyledHeader>
                    {buttons[button] ? '💧' : '🚫'}
                </StyledHeader>
            </StyledButton>
        )
        if (index % 2 === 0) {
            CoulmnOne.push(Element)
        } else {
            CoulmnTwo.push(Element)
        }
    })

    return (
        <SafeAreaView>
            <StyledView>
                <StyledHeader>Den Dryppende Hat</StyledHeader>
                <StyledSubheader>
                        Vælg hvilken zone på hatten, vandet skal dryppe på dig fra.
                </StyledSubheader>
                <StyledContainer>
                    <StyledSvgHelmet />
                    <StyledColumn>
                        {CoulmnOne}
                    </StyledColumn>
                    <StyledColumn>
                        {CoulmnTwo}
                    </StyledColumn>
                </StyledContainer>
                <StyledSubheader>
                    Intensitet: {intesity.toString()}%
                </StyledSubheader>
                <StyledSlider
                    minimumValue={0}
                    maximumValue={100}
                    minimumTrackTintColor="#43afee"
                    maximumTrackTintColor="#646464"
                    onValueChange={(newValue) => {
                        setIntensity(Math.round(newValue)) 
                    }} />
            </StyledView>
        </SafeAreaView>
    )
}

export default App

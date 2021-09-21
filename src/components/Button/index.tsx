import React from 'react';

import {Wrapper, Text } from './Button.styles';


type Props = {
    text: string;
    callback: () => void;
}


const Button: React.FC<Props> = ({text, callback}) => (
    <Wrapper  onClick={callback}>
        <Text>
        {text}
        </Text>
        
    </Wrapper>

);
export default Button;

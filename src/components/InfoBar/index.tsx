import React, { useState, useEffect, useRef }  from 'react';

import { Wrapper, Content}  from './InfoBar.styles';

//helpers
import { calcTime, convertMoney } from '../../helpers';

type Props = {
    time: number;
    budget: number;
    revenue: number;
}


const InfoBar: React.FC<Props> = ({ time, budget, revenue }) => (
    <Wrapper>
        <Content>
            <div className="column">
                <p> Running time: {calcTime(time)}</p>
            </div>
            <div className="column">
                <p> Budget: {calcTime(budget)}</p>
            </div>
            <div className="column">
                <p> Revenue: {calcTime(revenue)}</p>
            </div>
        </Content>
    </Wrapper>
)

export default InfoBar;
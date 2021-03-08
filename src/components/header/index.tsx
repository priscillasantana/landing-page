import React from 'react';
import Botao from '../button';
import Logo from '../logo';
import { P } from '../text/style';
import './style'
import { HeadStyle } from './style';


const Header = () => {

    return(
        <HeadStyle>
        <div className='header'>
            <div className='logo'>
                <Logo />
            </div>
            <P 
                fontWeight={'800'}
                fontSize={'16px'}
                lineHeight={'160%'}
                cursor={'pointer'}>
                    About
            </P>
            <P 
                fontWeight={'500'}
                fontSize={'16px'}
                lineHeight={'160%'}
                cursor={'pointer'}>
                    Help
            </P>
            <P 
                fontWeight={'500'}
                fontSize={'16px'}
                lineHeight={'160%'}
                cursor={'pointer'}>
                    Features
            </P>
            <P 
                fontWeight={'500'}
                fontSize={'16px'}
                lineHeight={'160%'}
                cursor={'pointer'}>
                    Signup
            </P>
            <Botao 
                background={'white'}
                boxShadow={'black'}
                width={'210px'}
                marginRight={'500%'}
                marginLeft={'1150px'}
            > ola</Botao>
            
        </div>
        </HeadStyle>
    )
}

export default Header

import React from 'react'
import { BtnStyle } from '../button/style'
import Image1 from '../images/image1'
import { P } from '../text/style'
import { H1 } from '../title/style'
import './style.css'

function SectionOne() {
    return (
        <div className='maior'>
            <div className='menor'>
                <H1
                fontSize={'80px'}
                fontWeight={'700'}
                lineHeight={'88px'}
                width={'645px'}
                height={'184px'}>
                    Save your data storage here.
                </H1>
                <P
                fontWeight={'800'}
                fontSize={'18px'}
                >
                    Data Warehouse is a data storage area that has been
                    tested for security, so you can store your data here
                    safely but not be afraid of being stolen by others.
                </P>
                <BtnStyle
                background={'#9C69E2'}
                width={'170px'}
                color={'white'}>Learn more</BtnStyle>
            </div>

            <div className='foto1'>
                <Image1 />
            </div>
        </div>
    )
}

export default SectionOne

import React from 'react';
import Image2 from '../images/image2';
import { P } from '../text/style';
import { H1 } from '../title/style';
import './style.css'


function SectionTwo() {

    return (
        <div className='two'>
            <div>
                <Image2 />     
            </div>
           <div className='filha'>
                <H1
                fontSize={'40px'}
                fontWeight={'700'}
                lineHeight={'52px'}
                width={'500px'}
                >
                    We are a high-level
                    data storage bank
                </H1>
               <P
               fontSize={'18px'}
               fontWeight={'500'}
               lineHeight={'30px'}>
                    The place to store various data that you can access at any 
                    time through the internet  and where you can carry it. 
                    This very flexible storage area has a high level of security. 
                    To enter into your own data you must enter the password that you 
                    created when you registered in this Data Warehouse. 
                </P>
            </div>
        </div>
    )
};

export default SectionTwo;

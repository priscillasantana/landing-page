import React from 'react'
import Feature1 from '../images/feature1'
import Feature2 from '../images/feature2'
import Feature3 from '../images/feature3'
import Feature4 from '../images/feature4'
import { P } from '../text/style'
import { H1 } from '../title/style'
import './style.css'

function SectionThree() {
    return (
        <div>
            <div className='p'>
                <H1
                fontSize={'40px'}
                fontWeight={'700'}
                lineHeight={'52px'}>
                    Features
                </H1>
                <P
                fontSize={'18px'}
                fontWeight={'500'}
                lineHeight={'28,8px'}
                >
                    Some of the features and advantages that we provide for those of you who 
                    store data in this Data Warehouse.
                </P>
            </div>
            
            <div className='feature' >
                <div className='card1'>
                    <Feature1 />
                    <H1
                    fontSize={'24px'}
                    fontWeight={'500'}
                    lineHeight={'32px'}>
                        Search Data</H1>
                    <P
                    fontSize={'15px'}
                    fontWeight={'400'}
                    lineHeight={'25,6px'}>
                        Don’t worry if your data is very large, the Data Warehoue provides
                        a search engine, which is useful for making it easier to find data effectively saving time.</P>
                        <H1
                    fontSize={'16px'}
                    fontWeight={'800'}
                    lineHeight={'25,6px'}>
                        Learn more
                        </H1>
                </div>
                <div className='card2'>
                    <Feature2 />
                    <H1
                    fontSize={'24px'}
                    fontWeight={'500'}
                    lineHeight={'32px'}>
                        24 Hours Access
                    </H1>
                    <P
                    fontSize={'15px'}
                    fontWeight={'400'}
                    lineHeight={'25,6px'}>
                        Access is given 24 hours a full morning to night and
                        meet again in the morning, giving you comfort when
                        you need data when urgent.
                    </P>
                        <H1
                    fontSize={'16px'}
                    fontWeight={'800'}
                    lineHeight={'25,6px'}>
                        Learn more
                        </H1>
                </div>
                <div className='card3'>
                    <Feature3 />
                    <H1
                    fontSize={'24px'}
                    fontWeight={'500'}
                    lineHeight={'32px'}>
                       Print Out
                    </H1>
                    <P
                    fontSize={'15px'}
                    fontWeight={'400'}
                    lineHeight={'25,6px'}>
                        Print out service gives you convenience if someday
                        you need print data, just edit it all and just print it.
                    </P>
                        <H1
                    fontSize={'16px'}
                    fontWeight={'800'}
                    lineHeight={'25,6px'}>
                        Learn more
                        </H1>
                </div>
                <div className='card4'>
                    <Feature4 />
                    <H1
                    fontSize={'24px'}
                    fontWeight={'500'}
                    lineHeight={'32px'}>
                        Security Code
                    </H1>
                    <P
                    fontSize={'15px'}
                    fontWeight={'400'}
                    lineHeight={'25,6px'}>
                        Data Security is one of our best facilities. Allows for your files
                        to be safer. The file can be secured with a code or password that 
                        you created, so only you can open the file.
                    </P>
                        <H1
                    fontSize={'16px'}
                    fontWeight={'800'}
                    lineHeight={'25,6px'}>
                        Learn more
                        </H1>
                </div>

            </div>

        </div>
    )
};

export default SectionThree;

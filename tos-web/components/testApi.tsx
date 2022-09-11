import React, {useEffect, useMemo, useState, useCallback } from 'react'
import styled from 'styled-components'
import {api} from '../libs/api'


const renderTest = ({
} : {}) => {

    const [hello,setHello] = useState('Hello World')

    useEffect(() => {
        console.log('start!!!!!!!!!!!!!!')
        getTestId('testId')
    })

    const getTestId = useCallback(async (memId) => {
            const data = await api.$get('/member/info',{
                params:{userId : memId}
            })
            setHello(data)    
        },[]
    )

    return(
        <Root>
            <CopyrightWrap>
                <Copyright>
                    {hello}
                </Copyright>
            </CopyrightWrap>
        </Root>
    )

}

const Root = styled.div`
  position:relative;
`
const CopyrightWrap =styled.div`
position:relative;
`
const Copyright =styled.div`
position:relative;
`

export default renderTest


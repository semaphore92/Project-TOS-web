import React, {useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import testAPi from '../components/testApi'

const _Copyright = (props: unknown) => {
    
    return (
        <Root>
            <CopyrightWrap>
                <Copyright>
                    Hello world!
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


export default _Copyright

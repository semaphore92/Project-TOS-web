import React, {useEffect, useMemo, useState } from 'react'
import {useSelector , useDispatch} from 'react-redux'
import styled from 'styled-components'
import testAPi from '../components/testApi'
import { RootStateInterface } from '../redux/type/rootStat'
import { memberListRequest } from '../redux/actions/memberActions'

const { memberList } = useSelector(
    (state: RootStateInterface) => state.memberReducer
)

useEffect(() => {
    useDispatch(memberListRequest())
},[])

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

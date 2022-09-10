import React, {useEffect, useMemo, useState, useCallback } from 'react'
import styled from 'styled-components'
import {proxy} from '../libs/api'

const _CopyrightTest = ({
    
    }: any) => {

        const getTestId = useCallback(
            async (mem_id) =>
                await proxy.get('/test/info',{
                    params:{tar_mem_id : mem_id}
                }),
                [],
        )
    }
)

export default _CopyrightTest


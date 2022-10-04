import {MemberListRequset,
        MemberType,
        MemberList,
        MemberListSucceess
    } from '../type/memberType'

export const memberListRequest = () : MemberListRequset => {
    return{
        type : MemberType.MEMBER_LIST_REQUEST,
    }
}

export const MemberListSuccess = (payload: MemberList): MemberListSucceess => {
    return {
        type : MemberType.MEMBER_LIST_SUCCESS,
        payload
    }
}

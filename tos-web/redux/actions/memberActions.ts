import {MemberListRequset,MemberType} from '../type/memberType'

export const memberListRequset = () : MemberListRequset => {
    return{
        type : MemberType.MEMBER_LIST_REQUEST
    }
}

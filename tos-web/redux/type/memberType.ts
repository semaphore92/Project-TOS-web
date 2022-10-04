export enum MemberType {
    MEMBER_LIST_REQUEST = 'MEMBER_LIST_REQUEST',
    MEMBER_LIST_SUCCESS = 'MEMBER_LIST_SUCCESS'
}

export interface MemberList {
    mem_id: String
    aa : String
}

export interface MemberState {
    memberList: any | MemberList[] | null 
    error? : null | Error
}

export type MemberListAction = MemberListRequset | MemberListSucceess

export interface MemberListRequset {
    type: MemberType.MEMBER_LIST_REQUEST
}

export interface MemberListSucceess {
    type: MemberType.MEMBER_LIST_SUCCESS
    payload : MemberList
}


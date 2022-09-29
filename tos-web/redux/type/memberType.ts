export enum MemberType {
    MEMBER_LIST_REQUEST = 'MEMBER_LIST_REQUEST'
}

export interface MemberList {
    mem_id: String
}

export interface MemberStatus {
    memberList: any | MemberList[] | null 
}

export interface MemberListRequset {
    type: MemberType.MEMBER_LIST_REQUEST
}

export type MemberListAction = MemberListRequset

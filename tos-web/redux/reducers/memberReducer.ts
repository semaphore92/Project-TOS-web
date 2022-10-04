import {HYDRATE} from 'next-redux-wrapper'
import { MemberStatus , MemberListAction, MemberType } from '../type/memberType'

export const initialState: MemberStatus = {
    memberList : null,
  }

interface HydratePayload {
    memberState : MemberStatus
}

const memberReducer = (
    state = initialState,
    action: MemberListAction | { type: typeof HYDRATE; payload : HydratePayload },
): MemberStatus => {
    switch (action.type) {
        case HYDRATE:
          return { ...state, ...action.payload.memberState }
        case MemberType.MEMBER_LIST_SUCCESS:
          return {
             ...state,
             memberList : action.payload,
          }
        default:
          return state
      }
}

export default memberReducer
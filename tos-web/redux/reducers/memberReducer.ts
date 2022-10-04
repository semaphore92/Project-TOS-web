import {HYDRATE} from 'next-redux-wrapper'
import { MemberState , MemberListAction, MemberType } from '../type/memberType'

export const initialState: MemberState = {
    memberList : null,
  }

interface HydratePayload {
    memberState : MemberState
}

const memberReducer = (
    state = initialState,
    action: MemberListAction | { type: typeof HYDRATE; payload : HydratePayload },
): MemberState => {
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
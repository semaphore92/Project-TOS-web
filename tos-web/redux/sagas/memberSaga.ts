import { MemberListRequset, MemberType } from '../type/memberType'
import { proxy } from '../../libs/api'
import { call , put , takeLatest, all } from 'redux-saga-effects'
import { callbackify } from 'util'

function* memberListRequest(action: MemberListRequset){
    try{
        const { status, data} = yield call(proxy.get,`/menu/~~`)
        yield put()
    }catch(err){

    }
}

function* watchMemberListRequest() {
    yield takeLatest(MemberType.MEMBER_LIST_REQUEST, memberListRequest)
  }
  
  export function* sagaMemberList() {
    yield all([call(watchMemberListRequest)])
  }
  
  export default sagaMemberList
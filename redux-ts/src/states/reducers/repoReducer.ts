import { Action } from '../actions'
import { ActionType } from '../actionTypes'

interface RepoStates {
  loading: boolean
  error: string | null
  data: string[]
}

const initialState = {
  loading: false,
  error: null,
  data: []
}

const reducer = (
  state: RepoStates = initialState,
  action: Action
): RepoStates => {
  switch (action.type) {
    case ActionType.SEARCH_REPO_REQUEST:
      return { loading: true, error: null, data: [] }
    case ActionType.SEARCH_REPO_SUCCESS:
      return { loading: false, error: null, data: action.payload }
    case ActionType.SEARCH_REPO_FAIL:
      return { loading: false, error: action.payload, data: [] }
    default:
      return state
  }
}

export default reducer

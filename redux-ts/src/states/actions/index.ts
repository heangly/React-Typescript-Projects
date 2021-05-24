import { ActionType } from '../actionTypes/index'

interface SearchRepoRequest {
  type: ActionType.SEARCH_REPO_REQUEST
}

interface SearchRepoSuccess {
  type: ActionType.SEARCH_REPO_SUCCESS
  payload: string[]
}

interface SearchRepoFail {
  type: ActionType.SEARCH_REPO_FAIL
  payload: string
}

export type Action = SearchRepoRequest | SearchRepoSuccess | SearchRepoFail

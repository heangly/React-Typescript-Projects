import axios from 'axios'
import { ActionType } from '../actionTypes'
import { Action } from '../actions'
import { Dispatch } from 'redux'

export const searchRepo =
  (term: string) => async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_REPO_REQUEST
    })

    try {
      const { data } = await axios.get(
        'https://registry.npmjs.org/-/v1/search',
        {
          params: {
            text: term
          }
        }
      )

      const names = data.objects.map((result: any) => result.package.name)

      dispatch({
        type: ActionType.SEARCH_REPO_SUCCESS,
        payload: names
      })
    } catch (error) {
      dispatch({
        type: ActionType.SEARCH_REPO_FAIL,
        payload: error.message
      })
    }
  }

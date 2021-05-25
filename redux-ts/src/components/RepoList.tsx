import React, { useState } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions'

const RepoList: React.FC = () => {
  const [term, setTerm] = useState<string>('')
  const { searchRepo } = useActions()
  const { loading, error, data } = useTypedSelector((state) => state.repo)

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    searchRepo(term)
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type='text' onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>

      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && data.map((name) => <div key={name}>{name}</div>)}
    </div>
  )
}

export default RepoList

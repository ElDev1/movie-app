import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const List = () => {

  const history = useNavigate()

  const token = localStorage.getItem('token')
  
  useEffect(() => {
    if(token === null) {
        history('/')
    }  
  },[])

  console.log(token)

  return (
    <div>List</div>
  )
}

export default List
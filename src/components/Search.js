import swAlert from '@sweetalert/with-react'

const Search = () => {

  const submitHandler = (e) => {
      e.preventDefault();
      const keyword = e.currentTarget.keyword.value.trim()

      if(keyword.length === 0) {
          swAlert(<h5>Type a movie name</h5>)
      } else if(keyword < 4) {
          swAlert('you must type more than four characters')
      }
  }


  return (
    <form onSubmit={submitHandler} className="d-flex align-items-center">
        <label className='form-label mb-0 mx-2'>
            <input className='form-control' type='text' name='keyword' placeholder="Search..." /> 
        </label>
        <button className='btn btn-success ml-2' type='submit'>Search</button>
    </form>
  )
} 

export default Search
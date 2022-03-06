import {useRef} from 'react'

export const UseRefExp1 = () => {

  let focusRef = useRef();

  function handleSubmit(e){
    e.preventDefault();
    console.log(focusRef.current.value);
    // focusRef.current.value = "hello siddesh"
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name" className='text-2xl m-2 text-gray-600'>Name</label>
            <input type="text" className='input input-bordered input-primary w-36 m-10 max-w-xs text-xl' ref={focusRef} name="" id="" />
            <button type='submit' className='btn btn-primary' >submit</button>
            <p onClick={()=> focusRef.current.focus()}>Siddesh</p>
        </form>
    </div>
  )
}

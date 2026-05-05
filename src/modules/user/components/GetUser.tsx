'use client'
import { useGetUser } from '../hooks/useGetUser'

export default function GetUser() {
    const{data,isPending}=useGetUser(3)
    console.log(data)
  return (
    <div>
        <h1>User</h1>
        {isPending&&<div>Loading ...</div>}
        {/* {error&&<div>{error.message} </div>} */}

    <div className='flex flex-row justify-center !p-5 text-black bg-red-200 w-200'>
        <div className='!mx-5 text-xl font-semibold bg-white !p-2 rounded' > id: {data?.id}</div>
        <div>
        <div>email: {data?.email}</div>
        <div>name: {data?.name}</div>
        </div>


    </div>



    </div>
  )
}

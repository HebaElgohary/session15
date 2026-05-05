'use client'
import { useGetUsers } from '../hooks/useGetUsers';

export default  function GetUsers() {
    const { data, isPending } =  useGetUsers(); 
 console.log(data)
    return (
    <div>
        <h2 className='text-2xl font-bold text-red-400 text-center'>Users</h2>
        {isPending && <div>Loading...</div>}
        {/* {error && <div>{error}</div>} */}
        {data ? (
            <div>
                {data.map((user: any) => (
                   < div key={user.id} className='flex flex-col gap-2 !p-4 rounded-md shadow-md'>
                    <div >{user.name}</div>
                    <div >{user.email}</div>
                     </div>
                ))}
            </div>
        ) : null}
    </div>
  )
}

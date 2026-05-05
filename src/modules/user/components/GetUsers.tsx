'use client'
import { useDeleteUser } from '../hooks/useDeleteUser';
import { useGetUsers } from '../hooks/useGetUsers';
import { useUpdateUser } from '../hooks/useUpdateUser';

export default  function GetUsers() {
    const { data, isPending } =  useGetUsers();
    const {mutate:deleteUser} = useDeleteUser() 
    const {mutate: updateUser} = useUpdateUser() 

const handelClick=(id:number)=>{
deleteUser(id,{onSuccess:()=>{alert('user deleted successfully')}})
}
const handelUpdate=(id:number)=>{
updateUser(id,{onSuccess:()=>{alert('user updated successfully')}})
}
 console.log(data)
    return (
    <div>
        <h2 className='text-2xl font-bold text-red-400 text-center'>Users</h2>
        {isPending && <div>Loading...</div>}
        {/* {error && <div>{error}</div>} */}
        {data ? (
            <div>
                {data.map((user: any) => (
                   < div key={user.id} className='flex flex-row gap-11 !p-4 rounded-md shadow-md'>
                  <div >
                    <div >{user.id} : {user.name}</div>
                    <div >{user.email}</div>
                    </div>
                    <button onClick={()=>handelClick(user.id)} className='bg-red-400 text-black rounded !px-4 !py-2'>delete</button>
                    <button onClick={()=>handelUpdate(user.id)} className='bg-amber-200 text-black rounded !px-4 !py-2'>update</button>

                     </div>
                ))}
            </div>
        ) : null}
    </div>
  )
}

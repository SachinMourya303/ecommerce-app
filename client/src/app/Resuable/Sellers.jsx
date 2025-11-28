import { Loader, Trash2 } from 'lucide-react';
import React from 'react'
import { useSelector } from 'react-redux'

const Sellers = () => {
  const sellersAccounts = useSelector(state => state.userData.sellersAccounts);
  
  const loader = useSelector(state => state.userData.loader);

  return (
    <div className="w-full flex-1 flex flex-col justify-between">
      <div className="md:w-[80%]">
        <h2 className="pb-4 text-lg font-medium">All Sellers</h2>

        <div className="flex flex-col items-center w-full overflow-hidden rounded-md bg-white border border-gray-500/20">
          <table className="md:table-auto table-fixed w-full overflow-hidden">
            <thead className="text-gray-900 text-sm text-left">
              <tr>
                <th className="px-4 py-3 font-semibold truncate">User</th>
                <th className="px-4 py-3 font-semibold truncate">Company Name</th>
                <th className="px-4 py-3 font-semibold truncate max-md:hidden">Address</th>
                <th className="px-4 py-3 font-semibold truncate">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-500">
              {sellersAccounts.map((user, index) => {
                return (
                  <tr key={index} className="border-t border-gray-500/20 hover:bg-gray-100">
                    <td className="md:px-4 pl-2 md:pl-4 py-3 truncate">
                      <span className="truncate w-full">{user.sellername}</span>
                    </td>
                    <td className="px-4 py-3 truncate">
                      <div className="truncate w-full">
                        <span>{user.companyname}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 max-sm:hidden">
                      <div className='flex flex-col text-xs'>
                        <span>Address: {user.address}</span>
                        <span>Country: {user.country}</span>
                        <span>State: {user.state}</span>
                        <span>City: {user.city}</span>
                        <span>Phone: {user.phone}</span>
                        <span>Pincode: {user.pincode}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <label onClick={() => deleteuser(user._id)} className="relative inline-flex items-center cursor-pointer text-gray-900">
                        {loader ? <Loader className='size-4 text-red-500' /> : <Trash2 className='size-4 text-red-500' />}
                      </label>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Sellers
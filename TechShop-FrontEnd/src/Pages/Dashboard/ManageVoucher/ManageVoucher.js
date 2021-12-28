import React, { useEffect, useState } from 'react';
import VoucherAdd from './VoucherAdd/VoucherAdd';
// import VoucherDetails from './VoucherDetails/VoucherDetails';
import './ManageVoucher.css';
import VoucherUpdate from './VoucherUpdate/VoucherUpdate';

const ManageVoucher = () => {
    const [managers, setManagers] = useState([]);
     useEffect(() => {
          fetch('https://localhost:44344/api/Voucher/All')
          .then(res => res.json())
          .then(result => setManagers(result))
          }, [managers])
          const handleDelete=(id)=>{
               console.log(id);
               const proceed=window.confirm(`Are you sure, To delete ,id is ${id}`);
               if(proceed){
               fetch(`https://localhost:44344/api/Voucher/delete/${id}`,{
               method: 'POST'
               })
               .then(res => res.json())
               .then(data=>{
               if(data.deletedCount>0){
               alert('Deleted Successfully');
               const remainingManagers= managers.filter(emp => emp._id !== id)
               setManagers(remainingManagers)
               }
               })
               }
               }
return (
<div className="container">
   <div className="row">
      <div className="col-lg-12">
         <div className="main-box clearfix">
            <div className="table-responsive">
               <table className="table user-list">
                  <thead>
                     <tr>
                        <th><span>VouId</span></th>
                        <th><span>VouCode</span></th>
                        <th className="text-center"><span>VoucherDiscount</span></th>
                        {/* <th><span>Email</span></th> */}
                        <th>&nbsp;</th>
                     </tr>
                  </thead>
                  <tbody>
                  {
                     Object.keys(managers).length !== 0 &&
                     managers.map(manager =>
                     <tr key={manager.VouId}>
                        <td>
                           <img src="" alt="" />
                           <a href="#" className="user-link">{manager.VouId}</a>
                           <span className="user-subhead"></span>
                        </td>
                        <td>
                        {manager.VouCode}
                        </td>
                        <td className="text-center">
                           <span className="label label-default">{manager.VouDiscount}</span>
                        </td>
                       
                        <td style={{ width: '20%' }}>
                        <div className="table-link d-flex">
                             {/* View Details  */}
                              {/* <VoucherDetails EmpID={manager.VouId}></VoucherDetails> */}
                              <VoucherUpdate EmpID={manager.VouId}></VoucherUpdate>
                              {/* Delete Manager  */}
                              <span className="fa-stack" onClick= {()=> handleDelete(manager.VouId)}>
                              <i className="fa fa-square fa-stack-2x"></i>
                              <i className="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                           </span>
                         </div>
                             </td>
                             </tr>
                     )}
                  </tbody>
               </table>
               <VoucherAdd></VoucherAdd>
            </div>
         </div>
      </div>
   </div>
</div>
);
};

export default ManageVoucher;
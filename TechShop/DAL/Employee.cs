//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DAL
{
    using System;
    using System.Collections.Generic;
    
    public partial class Employee
    {
        public Employee()
        {
            this.Orders = new HashSet<Order>();
        }
    
        public int EId { get; set; }
        public string EName { get; set; }
        public string EPassword { get; set; }
        public string EEmail { get; set; }
        public string EAddress { get; set; }
        public string EPhone { get; set; }
        public byte[] EPicture { get; set; }
        public int EBasicSalary { get; set; }
        public int EFastiveBonus { get; set; }
        public int EPerformBonus { get; set; }
        public string ESchedule { get; set; }
    
        public virtual ICollection<Order> Orders { get; set; }
    }
}

using BE.Entities;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BE.Data
{
    public class UserOperations : IDisposable
    {
        public User GetUserDetails(string userName, string password)
        {
            User _userDetails = null;
            using (DBConnection dbCon = new Data.DBConnection())
            {
                SqlParameter[] sqlParams = new SqlParameter[] { new SqlParameter(parameterName:"UserName",value:userName),
                                //new SqlParameter(parameterName:"Password",value:Encrypt.DecryptString(password)) };
                                new SqlParameter(parameterName:"Password",value:password) };

                DataSet dsUserDetails = dbCon.ExecuteReader("BE_Get_LoginUserDetails", sqlParams);
                if (dsUserDetails != null && dsUserDetails.Tables.Count > 0 && dsUserDetails.Tables[0].Rows.Count > 0)
                {
                    _userDetails = new User();
                    _userDetails.ID = Convert.ToInt32(dsUserDetails.Tables[0].Rows[0]["ID"]);
                    _userDetails.LoginName = Convert.ToString(dsUserDetails.Tables[0].Rows[0]["LoginName"]);
                    _userDetails.TenantID = Convert.ToInt32(dsUserDetails.Tables[0].Rows[0]["TenantID"]);
                    _userDetails.EmployeeID = Convert.ToInt32(dsUserDetails.Tables[0].Rows[0]["EmployeeID"]);
                    _userDetails.DesignationID= Convert.ToInt32(dsUserDetails.Tables[0].Rows[0]["DesignationID"]);
                    _userDetails.Designation = Convert.ToString(dsUserDetails.Tables[0].Rows[0]["DesignationName"]);
                }
            }
            return _userDetails;
        }

        #region IDisposable Support
        private bool disposedValue = false; // To detect redundant calls

        protected virtual void Dispose(bool disposing)
        {
            if (!disposedValue)
            {
                if (disposing)
                {
                    // TODO: dispose managed state (managed objects).
                }

                // TODO: free unmanaged resources (unmanaged objects) and override a finalizer below.
                // TODO: set large fields to null.

                disposedValue = true;
            }
        }

        // TODO: override a finalizer only if Dispose(bool disposing) above has code to free unmanaged resources.
        // ~UserOperations() {
        //   // Do not change this code. Put cleanup code in Dispose(bool disposing) above.
        //   Dispose(false);
        // }

        // This code added to correctly implement the disposable pattern.
        public void Dispose()
        {
            // Do not change this code. Put cleanup code in Dispose(bool disposing) above.
            Dispose(true);
            // TODO: uncomment the following line if the finalizer is overridden above.
            // GC.SuppressFinalize(this);
        }
        #endregion
    }
}

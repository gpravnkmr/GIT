using BE.Data;
using BE.Entities;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BE_WebAPI.Controllers
{
    public class ExitDateController : ApiController
    {
        [ActionName("UpdateExitDate")]
        [HttpPost]
        public HttpResponseMessage UpdateTenantExitDate([FromBody]Tenant _tenant)
        {
            using (UserOperations _userOperation = new UserOperations())
            {
                _userOperation.UpdateTenantExitDate(_tenant);
                return new HttpResponseMessage(HttpStatusCode.OK);
            }
        }

        [HttpOptions]
        public void Options()
        {

        }
    }
}
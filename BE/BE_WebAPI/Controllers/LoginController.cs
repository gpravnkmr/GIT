using BE.Data;
using BE.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BE_WebAPI.Controllers
{
    public class LoginController : ApiController
    {
        public IHttpActionResult Get(string userName, string password)
        {
            User _user = null;
            using (UserOperations _userOperation = new UserOperations())
            {
                _user = _userOperation.GetUserDetails(userName: userName
                    , password: password);
                if (_user == null)
                    return NotFound();
                else
                    return Ok(_user);
            }
        }
    }
}

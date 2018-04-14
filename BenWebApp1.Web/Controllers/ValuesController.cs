using BenWebApp1.CommandQuery.Queries.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BenWebApp1.Web.Controllers
{
    public class ValuesController : ApiController
    {

        readonly IGetUserByIdQuery getUserByIdQuery;

        public ValuesController(IGetUserByIdQuery getUserByIdQuery)
        {
            this.getUserByIdQuery = getUserByIdQuery;
        }

        // GET api/values
        public IEnumerable<string> Get()
        {
            //var test = getUserByIdQuery.Execute(1);
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}

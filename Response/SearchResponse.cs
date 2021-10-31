using Movies.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Movies.Response
{
    public class SearchResponse<T>
    {
        public Status Status { get; set; }

        public List<T> Result { get; set; }
    }

    public class Status
    {
        public string StatusCode { get; set; }

        public string Description { get; set; }

    }
}

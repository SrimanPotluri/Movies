using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Movies.Entity;
using Movies.Models;
using Movies.Repository;
using Movies.Response;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace Movies.Controllers
{
    [ApiController]
    [Route("api/titles")]
    public class TitlesController : Controller
    {
        private readonly ILogger<TitlesController> _logger;
        private readonly ITitlesRepository _titlesRepository;

        public TitlesController(ILogger<TitlesController> logger, ITitlesRepository titlesRepository)
        {
            _logger = logger;
            _titlesRepository = titlesRepository;
        }

        [HttpGet]
        public ActionResult<SearchResponse<Title>> Index(string searchTerm)
        {

            var searchResponse = new SearchResponse<Title>();

            if (string.IsNullOrEmpty(searchTerm))
            {
                searchResponse.Status = new Status {  Description = "Bad Request", StatusCode = Convert.ToString((int)HttpStatusCode.BadRequest)};
                searchResponse.Result = null;
                return searchResponse;
            }

            try
            {
                var resultSet = _titlesRepository.GetTitleBySearchTerm(searchTerm);
                if(resultSet!=null && resultSet.Count > 0)
                {
                    searchResponse.Status = new Status { Description = "Ok", StatusCode = Convert.ToString((int)HttpStatusCode.OK) };
                    searchResponse.Result = resultSet;
                }
                else
                {
                    searchResponse.Status = new Status { Description = "No Results Found", StatusCode = Convert.ToString((int)HttpStatusCode.OK) };
                    searchResponse.Result = null;
                }
            }
            catch (Exception e)
            {
                searchResponse.Status = new Status { Description = "Internal Server Error", StatusCode = Convert.ToString((int)HttpStatusCode.InternalServerError) };
                searchResponse.Result = null;
            }

            return searchResponse;


        }

        [HttpGet("getmovieinfo")]
        public ActionResult<SearchResponse<MovieView>> SearchMovieInfo(int titleId)
        {
            var searchResponse = new SearchResponse<MovieView>();
            var results = _titlesRepository.GetMovieViewByTitleId(titleId);

            var list = new List<MovieView>();
            list.Add(results);
            searchResponse.Status = new Status { Description = "Ok", StatusCode = Convert.ToString((int)HttpStatusCode.OK) };
            searchResponse.Result = list;
            return searchResponse;
        }
    }
}

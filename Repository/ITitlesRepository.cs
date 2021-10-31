using Movies.Entity;
using Movies.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Movies.Repository
{
    public interface ITitlesRepository
    {
        List<Title> GetTitleBySearchTerm(string searchTerm);

       MovieView GetMovieViewByTitleId(int titleId);
    }
}

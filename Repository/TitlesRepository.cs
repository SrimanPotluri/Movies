using Microsoft.EntityFrameworkCore;
using Movies.Entity;
using Movies.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Movies.Repository
{
    public class TitlesRepository : ITitlesRepository
    {
        private readonly TitlesContext _context;

        public TitlesRepository(TitlesContext context)
        {
            _context = context;
        }

        public List<MovieView> GetTitleBySearchTerm(string searchTerm)
        {
            var resultSet = new List<MovieView>();
            try
            {
                
                var titles =  _context.Titles
                    .Include(z => z.StoryLines)
                    .Include(z => z.TitleGenres)
                    .ThenInclude(z => z.Genre)
                    .Where(z => EF.Functions.Like(z.TitleName, $"%{searchTerm}%"))
                    .OrderBy(z => z.TitleName).ToList();

                foreach(var titlegenres1 in titles)
                {
                    List<MovieStoryLine> storyLines = new List<MovieStoryLine>();
                    foreach (var stroyLine in titlegenres1.StoryLines)
                    {
                        var newstroyLine = new MovieStoryLine
                        {
                            Description = stroyLine.Description,
                            Language = stroyLine.Language,
                            Type = stroyLine.Type
                        };

                        storyLines.Add(newstroyLine);
                    }

                 
                    List<string> allGenres = new List<string>();
                    foreach (var titleGenre in titlegenres1.TitleGenres)
                    {
                        allGenres.Add(titleGenre.Genre.Name);
                        
                    }


                    var movieView = new MovieView
                    {
                        TitleName = titlegenres1.TitleName,
                        ReleaseYear = titlegenres1.ReleaseYear,
                        StoryLines = storyLines,
                        AllGenres = allGenres
                    };

                    resultSet.Add(movieView);
                }
               


                return resultSet;

            }
            catch(Exception e)
            {
                return null;
            }
        } 


        public MovieView GetMovieViewByTitleId(int titleId)
        {
            try
            {

                var titlegenres1 =  _context.Titles
                    .Include(x => x.StoryLines)
                    .Include(x => x.Awards)
                    .Include(x => x.OtherNames)
                    .Include(x => x.TitleGenres)
                    .ThenInclude(x => x.Genre)
                    .Where(x => x.TitleId == titleId)
                    .FirstOrDefault();


                List<MovieAward> awards = new List<MovieAward>();
                foreach(var award in titlegenres1.Awards)
                {
                    var newaward = new MovieAward
                    {
                        AwardType = award.Award1,
                        AwardWon = award.AwardWon,
                        AwardYear = award.AwardYear
                    };

                    awards.Add(newaward);
                }

                List<MovieStoryLine> storyLines = new List<MovieStoryLine>();
                foreach (var stroyLine in titlegenres1.StoryLines)
                {
                    var newstroyLine = new MovieStoryLine
                    {
                        Description = stroyLine.Description,
                        Language = stroyLine.Language,
                        Type = stroyLine.Type
                    };

                    storyLines.Add(newstroyLine);
                }

                List<MovieGenre> genres = new List<MovieGenre>();
                foreach (var titleGenre in titlegenres1.TitleGenres)
                {
                        var newgenre = new MovieGenre
                        {
                            Genre = titleGenre.Genre.Name
                        };

                        genres.Add(newgenre);                     
                }


                var resultSet = new MovieView
                {
                    TitleName = titlegenres1.TitleName,
                    ReleaseYear = titlegenres1.ReleaseYear,
                    Awards = awards,
                    StoryLines = storyLines,
                    Genres = genres
                };


                return resultSet;
            }
            catch(Exception e)
            {
                return null;
            }
        }
    }
}

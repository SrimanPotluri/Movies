using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Movies.Models
{
    public class MovieView
    {
        public string TitleName { get; set; }
        public int? ReleaseYear { get; set; }
        public List<MovieGenre> Genres { get; set; }
        public List<MovieAward> Awards { get; set; }

        public List<MovieTitleParticipant> TitleParticipants { get; set; }

        public List<MovieStoryLine> StoryLines { get; set; }


        public MovieView()
        {
            Genres = new List<MovieGenre>();
            Awards = new List<MovieAward>();
            TitleParticipants = new List<MovieTitleParticipant>();
            StoryLines = new List<MovieStoryLine>();

        }

    }

    public class MovieGenre
    {
        public string Genre { get; set; }
       

    }

    public class MovieAward
    {
        public bool? AwardWon { get; set; }
        public int? AwardYear { get; set; }
        public string AwardType { get; set; }

    }

    public class MovieTitleParticipant
    {
        public string ParticipantId { get; set; }
        public string RoleType { get; set; }

        public short? IsOnScreen { get; set; }
    }

    public class MovieStoryLine
    {
        public string Language { get; set; }
        public string Description { get; set; }
        public string Type { get; set; }
    }
}

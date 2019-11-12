using System;

namespace CandyMarket.Api.DataModels
{
    public class Candy
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public string Flavor { get; set; }
        public string Owner { get; set; }
        public bool IsDonate { get; set; }
    }
}

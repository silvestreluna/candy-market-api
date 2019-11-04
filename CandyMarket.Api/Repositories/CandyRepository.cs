﻿using System;
using System.Collections.Generic;
using CandyMarket.Api.DataModels;
using CandyMarket.Api.Dtos;
using System.Data.SqlClient;
using Dapper;

namespace CandyMarket.Api.Repositories
{
    public class CandyRepository : ICandyRepository
    {
        string _connectionString = "Server=localhost;Database=CandyMarket;Trusted_Connection=True";
        public IEnumerable<Candy> GetAllCandy()
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = "SELECT * FROM CANDY";

                var candy = db.Query<Candy>(sql);
                
                return candy;
            }
        }

        public bool AddCandy(AddCandyDto newCandy)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"INSERT INTO Candy
                           ([Name] ,[Type] ,[Flavor] ,[Owner])
                           VALUES (@name, @type, @flavor, @owner)";
                return db.Execute(sql, newCandy) == 1;
               

            }
        }

        public bool EatCandy(Guid candyIdToDelete)
        {
            throw new NotImplementedException();
        }
    }
}
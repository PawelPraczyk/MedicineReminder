using MedicineRemainder.Core.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace MedicineRemainder.Data.Database
{
    public class MedicineRemainderContext : DbContext
    {
        public MedicineRemainderContext(DbContextOptions options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
        public DbSet<Event> Events { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Medicine> Medicines { get; set; }
    }
}

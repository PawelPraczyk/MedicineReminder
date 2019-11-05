using MedicineReminder.Core.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace MedicineReminder.Data.Database
{
    public class MedicineReminderContext : DbContext
    {
        public MedicineReminderContext(DbContextOptions options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
        public DbSet<Event> Events { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Medicine> Medicines { get; set; }
        public DbSet<Notification> Notifications { get; set; }
    }
}

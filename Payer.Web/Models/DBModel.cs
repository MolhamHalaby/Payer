using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;
using System.Linq;

namespace Payer.Models
{
    public partial class DBModel : DbContext
    {
        public DBModel()
            : base("Default")
        {
        }

   //     public virtual DbSet<Customer> Customers { get; set; }
        public virtual DbSet<CustomerTable> CustomerTables { get; set; }
        public virtual DbSet<Exception> Exceptions { get; set; }
        public virtual DbSet<Item> Items { get; set; }
        public virtual DbSet<Language> Languages { get; set; }
      //  public virtual DbSet<MailsMessage> MailsMessages { get; set; }
        public virtual DbSet<Person> Persons { get; set; }
        public virtual DbSet<RolePermission> RolePermissions { get; set; }
        public virtual DbSet<Role> Roles { get; set; }
        public virtual DbSet<Tip> Tips { get; set; }
        public virtual DbSet<TransactionItem> TransactionItems { get; set; }
        public virtual DbSet<Transaction> Transactions { get; set; }
        public virtual DbSet<UserPermission> UserPermissions { get; set; }
        public virtual DbSet<UserPreference> UserPreferences { get; set; }
        public virtual DbSet<UserRole> UserRoles { get; set; }
        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<Waiter> Waiters { get; set; }
        public virtual DbSet<VersionInfo> VersionInfoes { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
         /*   modelBuilder.Entity<Customer>()
                .HasMany(e => e.MailsMessages)
                .WithRequired(e => e.Customer)
                .WillCascadeOnDelete(false);*/

            modelBuilder.Entity<CustomerTable>()
                .HasMany(e => e.Transactions)
                .WithRequired(e => e.CustomerTable)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Item>()
                .HasMany(e => e.TransactionItems)
                .WithRequired(e => e.Item)
                .WillCascadeOnDelete(false);

           /* modelBuilder.Entity<Person>()
                .HasMany(e => e.Customers)
                .WithRequired(e => e.Person)
                .WillCascadeOnDelete(false);*/

            modelBuilder.Entity<Person>()
                .HasMany(e => e.Waiters)
                .WithRequired(e => e.Person)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Role>()
                .HasMany(e => e.RolePermissions)
                .WithRequired(e => e.Role)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Role>()
                .HasMany(e => e.UserRoles)
                .WithRequired(e => e.Role)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Transaction>()
                .HasMany(e => e.TransactionItems)
                .WithRequired(e => e.Transaction)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<User>()
                .HasMany(e => e.UserPermissions)
                .WithRequired(e => e.User)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<User>()
                .HasMany(e => e.UserRoles)
                .WithRequired(e => e.User)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Waiter>()
                .HasMany(e => e.Tips)
                .WithRequired(e => e.Waiter)
                .WillCascadeOnDelete(false);

            modelBuilder.Entity<Waiter>()
                .HasMany(e => e.Transactions)
                .WithRequired(e => e.Waiter)
                .WillCascadeOnDelete(false);
        }
    }
}

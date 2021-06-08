using Serenity.Navigation;
using MyPages = Payer.Default.Pages;

//[assembly: NavigationLink(int.MaxValue, "Default/Customers", typeof(MyPages.CustomersController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Customer Tables", typeof(MyPages.CustomerTablesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Items", typeof(MyPages.ItemsController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Default/Mails Messages", typeof(MyPages.MailsMessagesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Persons", typeof(MyPages.PersonsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Tips", typeof(MyPages.TipsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Transaction Items", typeof(MyPages.TransactionItemsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Transactions", typeof(MyPages.TransactionsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Waiters", typeof(MyPages.WaitersController), icon: null)]
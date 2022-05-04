function findAccountById(accounts, id) {
  let found = accounts.find((currentAccount) => currentAccount.id === id)
  return found;
}
function sortAccountsByLastName(accounts) {
  return accounts.sort((nameA, nameB) => (nameA.name.last > nameB.name.last) ? 1 : -1);
}

function getTotalNumberOfBorrows(account, books) {
  let counter = 0;
  const accountId = account.id; 
  books.forEach((book) => book.borrows.forEach((isBorrowed) => (accountId === isBorrowed.id) && counter++));
  return counter; 
}

function getBooksPossessedByAccount(account, books, authors) {
  const accountId = account.id; 
  let booksHeld = books.filter((book) => book.borrows[0].returned === false && book.borrows[0].id === account.id);
  let bookDetails = booksHeld.map((detail) => ({ 
  ...detail, author: authors.find((author) => author.id === detail.authorId)
  }));
  
  //return the whole object
  return bookDetails;
  
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};

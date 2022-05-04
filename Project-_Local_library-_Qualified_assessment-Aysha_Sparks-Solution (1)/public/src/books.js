function findAuthorById(authors, id) {
 let found = authors.find((currentAuthor) => currentAuthor.id === id)
  return found;
}
function findBookById(books, id) {
   let found = books.find((currentBook) => currentBook.id === id)
  return found;
}

function partitionBooksByBorrowedStatus(books) {
  let isReturned = books.filter((book) => book.borrows[0].returned);
  let notReturned = books.filter((book) => !book.borrows[0].returned);
  return [ notReturned, isReturned ];
}

function getBorrowersForBook(book, accounts) {
  let borrowList = [];
	let borrows = book.borrows;
	borrows.forEach((borrow) => {
		accounts.forEach((account) => {
			if(account.id === borrow.id){
				account.returned = borrow.returned;
				borrowList.push(account);
             
			}
		});
	});
	return borrowList.slice(0,10);
  
}

	

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};

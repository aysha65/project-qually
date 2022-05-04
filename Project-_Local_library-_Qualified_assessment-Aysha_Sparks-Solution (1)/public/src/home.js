function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
 return accounts.length
}

function getBooksBorrowedCount(books) {
  let borrowedBooks = books.reduce((acc, book) => {
    return (acc + (!book.borrows[0].returned));
  }, 0);
  return borrowedBooks; 
  
}
//i need a helper function here APPARENTLY
function countGenres(books){
  return books.reduce((acc, book) => {
   const existingGenre = acc.find(genre => genre.name.includes(book.genre))
   if (existingGenre != null){
     existingGenre.count++
     return acc
   }
    acc.push({name:book.genre, count:1})
    return acc
  }, [])
}

function getMostCommonGenres(books) {
  const genreArr = countGenres(books)
  const sortGenreArr = genreArr.sort((a, b) => a.count < b.count ? 1 : -1)
  const topGenres = sortGenreArr.slice(0, 5)
  return topGenres
}

function getMostPopularBooks(books) {
  const bookArr = books.reduce((acc, book) => {
    const bookBoy = {name: book.title, count: book.borrows.length}
    acc.push(bookBoy)
    return acc
  }, [])
  const sortBookBoy = bookArr.sort((a, b) => a.count < b.count ? 1 : -1)
  const topBookBoy = sortBookBoy.slice(0, 5)
  return topBookBoy
}

function getMostPopularAuthors(books, authors) {
   let authorsResult = [];
  let popularAuthor = books.filter((book) => authors.find((author) => author.id === book.authorId));
     popularAuthor.forEach((book) => {
      let author = authors.find((author) => author.id === book.authorId);
      authorsResult.push( {name: `${author.name.first} ${author.name.last}`, count: book.borrows.length} )
    });
  return (authorsResult.sort((countA, countB) => countA.count < countB.count ? 1 : -1)).slice(0, 5);
  
  
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};

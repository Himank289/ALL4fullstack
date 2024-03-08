package com.in28minutes.jpa.hibernate.demo.controller;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.in28minutes.jpa.hibernate.demo.entity.Book;
import com.in28minutes.jpa.hibernate.demo.service.BookService;

@RestController
@RequestMapping("/books")
//@CrossOrigin(origins="http://localhost:3000" ,methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT,RequestMethod.DELETE})
@CrossOrigin(origins="*")
public class BookRestController {

    @Autowired
    private BookService bookService;

    @GetMapping("/")
//    @CrossOrigin(origins="http://localhost:3000")
    public List<Book> getAllBooks() {
        return bookService.getAllBooks();
    }
    
    @GetMapping("/{id}")
//  @CrossOrigin(origins="http://localhost:3000")
	  public Book getBookById(@PathVariable Integer id) {
	      Optional<Book> book = bookService.getBookById(id);
	      if (book.isPresent()) {
	    	  return book.get();
	      }
	      else {
	    	  return null;
	      }
	 
	  }

	  @PostMapping("/")
//	@CrossOrigin(origins="http://localhost:3000")
	  public Book createBook(@RequestBody Book book) {
	      Book savedBook = bookService.createBook(book);
	      System.out.println("Post called:");
	      return savedBook;
	  }

  @PutMapping("/{id}")
//  @CrossOrigin(origins="http://localhost:3000")
  public Book updateBook(@PathVariable Integer id, @RequestBody Book bookDetails) {
      Optional<Book> updatedBook = bookService.updateBook(id, bookDetails);
      if (updatedBook.isPresent()) {
    	  return updatedBook.get();
      }
      else {
    	  return null;
      }
  }

  @DeleteMapping("/{id}")
//  @CrossOrigin(origins="http://localhost:3000")
  public void deleteBook(@PathVariable Integer id) {
      boolean deleted = bookService.deleteBook(id);
//      return ;
  }
  
  
//    @GetMapping("/{id}")
////    @CrossOrigin(origins="http://localhost:3000")
//    public ResponseEntity<Book> getBookById(@PathVariable Integer id) {
//        Optional<Book> book = bookService.getBookById(id);
//        return book.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
//    }
//
//    @PostMapping("/")
////    @CrossOrigin(origins="http://localhost:3000")
//    public ResponseEntity<Book> createBook(@RequestBody Book book) {
//        Book savedBook = bookService.createBook(book);
//        System.out.println("Post called:");
//        return ResponseEntity.status(HttpStatus.CREATED).body(savedBook);
//    }
//
//    @PutMapping("/{id}")
////    @CrossOrigin(origins="http://localhost:3000")
//    public ResponseEntity<Book> updateBook(@PathVariable Integer id, @RequestBody Book bookDetails) {
//        Optional<Book> updatedBook = bookService.updateBook(id, bookDetails);
//        return updatedBook.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
//    }
//
//    @DeleteMapping("/{id}")
////    @CrossOrigin(origins="http://localhost:3000")
//    public ResponseEntity<Void> deleteBook(@PathVariable Integer id) {
//        boolean deleted = bookService.deleteBook(id);
//        return deleted ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
//    }
}


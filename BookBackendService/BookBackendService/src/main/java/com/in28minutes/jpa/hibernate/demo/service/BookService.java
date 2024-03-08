package com.in28minutes.jpa.hibernate.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.in28minutes.jpa.hibernate.demo.entity.Book;
import com.in28minutes.jpa.hibernate.demo.repository.BookRepo;

@Service
public class BookService {

    @Autowired
    private BookRepo bookRepository;

    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    public Optional<Book> getBookById(Integer id) {
        return bookRepository.findById(id);
    }

    public Book createBook(Book book) {
        return bookRepository.save(book);
    }

    public Optional<Book> updateBook(Integer id, Book bookDetails) {
        Optional<Book> optionalBook = bookRepository.findById(id);
        if (optionalBook.isPresent()) {
            Book existingBook = optionalBook.get();
            existingBook.setBkname(bookDetails.getBkname());
            existingBook.setbkprice(bookDetails.getbkprice());
            bookRepository.save(existingBook);
            return Optional.of(existingBook);
        } else {
            return Optional.empty();
        }
    }

    public boolean deleteBook(Integer id) {
        Optional<Book> book = bookRepository.findById(id);
        if (book.isPresent()) {
            bookRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }
}


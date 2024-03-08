package com.in28minutes.jpa.hibernate.demo.repository;

import java.util.*;
import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.in28minutes.jpa.hibernate.demo.entity.Book;

import net.bytebuddy.description.annotation.AnnotationValue.Sort;
//@Transactional
@Repository
public interface BookRepo extends JpaRepository<Book, Integer> {
	
}

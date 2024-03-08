package com.in28minutes.jpa.hibernate.demo.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Book {
	@Id
	int id;
	String bkname;
	double bkprice;
	
	public Book() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Book(int id, String bkname, double bkprice) {
		super();
		this.id = id;
		this.bkname = bkname;
		this.bkprice = bkprice;
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getBkname() {
		return bkname;
	}
	public void setBkname(String bkname) {
		this.bkname = bkname;
	}
	public double getbkprice() {
		return bkprice;
	}
	public void setbkprice(double bkprice) {
		this.bkprice = bkprice;
	}
	@Override
	public String toString() {
		return "Book [id=" + id + ", bkname=" + bkname + ", bkprice=" + bkprice + "]";
	}
	
	
	
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Book other = (Book) obj;
		return id == other.id;
	}
	
	

}

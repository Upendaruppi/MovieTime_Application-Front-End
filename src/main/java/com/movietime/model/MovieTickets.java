package com.movietime.model;

import java.util.Date;
import java.util.Optional;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "movieticket")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MovieTickets {
	
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ticketId", unique = true)
    private int ticketId;

    @ManyToOne 
    @JoinColumn(name = "movieId")
    private Movie movie;
    
    
    @Column(name = "date")
    private String date;
    
    @Column(name = "showTime")
    private String showTime;
    
    @Column(name = "theatre")
    private String theatre;

    
    @ManyToOne
    @JoinColumn(name = "userId")
    private User user;

  

    
    
}

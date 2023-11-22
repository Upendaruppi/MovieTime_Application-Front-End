package com.movietime.controller;

import com.movietime.DTO.TicketPurchaseRequestDTO;
import com.movietime.model.Movie;
import com.movietime.model.MovieTickets;
import com.movietime.repository.MovieTicketsJpaRepository;
import com.movietime.service.MovieTicketsJpaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/movietickets")
@CrossOrigin(origins = "http://localhost:4200")
public class MovieTicketsController {

     @Autowired
     private MovieTicketsJpaService movieTicketsJpaService;

    @PostMapping("/buy")
    public MovieTickets buyTicketByUserId(@RequestBody TicketPurchaseRequestDTO request) {
        System.out.println(request.getTheatre());
    	return movieTicketsJpaService.buyTicketByUserId(request.getUserId(), request.getMovieId(), request.getShowTime(), request.getTheatre(), request.getDate());
   
    }

    
    @GetMapping("/{userId}")
    public List<MovieTickets> getMovieTicketsByUserId(@PathVariable int userId) {
    	System.out.println("Received userId: " + userId);

        List<MovieTickets> movieTickets = movieTicketsJpaService.getMovieTicketsByUserId(userId);
        
        System.out.println("Response Body: " + movieTickets);
    	
    	return movieTicketsJpaService.getMovieTicketsByUserId(userId);
    
    }
    
    @DeleteMapping("/delete/{ticketId}")
    public void deleteTicket(@PathVariable int ticketId) {
    	
    	movieTicketsJpaService.deleteTicket(ticketId);
    	
    }
    

}

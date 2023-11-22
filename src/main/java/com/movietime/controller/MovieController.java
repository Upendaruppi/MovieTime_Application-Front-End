package com.movietime.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.movietime.DTO.MovieDTO;
import com.movietime.model.Movie;
import com.movietime.service.MovieJpaService;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")

@RequestMapping("/movie")
public class MovieController {

    @Autowired
    private MovieJpaService movieJpaService;

    @PostMapping("/add")
    public Movie addMovie(@RequestBody Movie movie) {
        return movieJpaService.addMovie(movie);
    }

    @GetMapping("/get")
    public List<Movie> getMovies() {
        return movieJpaService.getMovies();
    }
    @GetMapping("/name/{movieName}")
    public Movie findByMovieName(@PathVariable("movieName") String movieName) {
        System.out.println("Received movie name: " + movieName);
        return movieJpaService.getMovieByName(movieName);
    }


    
    @GetMapping("/id/{id}")
    public Movie getMovieById(@PathVariable int id) {
        return movieJpaService.getMovieById(id);
    }

    @PutMapping("/update/{id}")
    public Movie updateMovie(@PathVariable int id , @RequestBody MovieDTO movie) {
    	
    	return movieJpaService.updateMovie(movie, id);
   
    }

    @DeleteMapping("/delete/{movieId}")
    public void deleteMovie(@PathVariable int movieId) {
        movieJpaService.deleteMovie(movieId);
        
    }
}

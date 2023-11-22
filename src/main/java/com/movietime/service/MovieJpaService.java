package com.movietime.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.movietime.DTO.MovieDTO;
import com.movietime.model.Movie;
import com.movietime.repository.MovieJpaRepository;
import java.util.List;
import java.util.Optional;

@Service
public class MovieJpaService {

    @Autowired
    private MovieJpaRepository movieJpaRepository;

    
    public Movie addMovie(Movie movie) {
    	
    	return movieJpaRepository.save(movie);
    	
    }

    
    public List<Movie> getMovies() {
    	
        return movieJpaRepository.findAll();
    }

    
    public Movie getMovieByName(String movieName) {
    	
        return movieJpaRepository.findByMovieName(movieName);
    }
    
    
    
    public Movie updateMovie(MovieDTO movieDTO, int id) {
    	
        Optional<Movie> optionalMovie = movieJpaRepository.findById(id);

        if (optionalMovie.isPresent()) {
        	
            Movie movieToUpdate = optionalMovie.get();

            if (movieDTO.getMovieName() != null) {
                movieToUpdate.setMovieName(movieDTO.getMovieName());
            }
            if (movieDTO.getDirector() != null) {
                movieToUpdate.setDirector(movieDTO.getDirector());
            }
            if (movieDTO.getPosterLink() != null) {
                movieToUpdate.setPosterLink(movieDTO.getPosterLink());
            }

            return movieJpaRepository.save(movieToUpdate);
        } else {
            throw new RuntimeException("Movie with ID " + id + " not found");
        }
        
    }
    
    
    public void deleteMovie(int movieId) {
    	
        movieJpaRepository.deleteById(movieId);
        
    }

	public Movie getMovieById(int id) {
		
		return movieJpaRepository.findByMovieId(id) ;
		
	}
}

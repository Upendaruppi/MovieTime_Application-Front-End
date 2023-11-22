package com.movietime.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.movietime.model.Movie;

@Repository
public interface MovieJpaRepository extends JpaRepository<Movie, Integer> {
 
	Movie findByMovieName(String movieName);
	Movie findByMovieId(int movieId);
	
}

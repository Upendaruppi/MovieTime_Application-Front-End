package com.movietime.repository;

import com.movietime.model.Movie;
import com.movietime.model.MovieTickets;
import com.movietime.model.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface MovieTicketsJpaRepository extends JpaRepository<MovieTickets, Integer> {
   
	
	MovieTickets findByUserAndMovieAndShowTime(User user, Movie movie, String showTime);

	static List<MovieTickets> findByUserId(int userId) {
		// TODO Auto-generated method stub
		return null;
	}

	
	List<MovieTickets> findByUser_UserId(int userId);

}

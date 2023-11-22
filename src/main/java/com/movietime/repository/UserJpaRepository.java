package com.movietime.repository;


import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.movietime.model.MovieTickets;
import com.movietime.model.User;
@Repository
public interface UserJpaRepository extends JpaRepository<User, Integer> {
    Optional<User> findByEmailAndPassword(String email, String password);

    void deleteByEmail(String email);

    User findByUserId(int userId);

    List<MovieTickets> getMovieTicketsByUserId(int userId);
    
}



	




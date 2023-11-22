package com.movietime.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.movietime.model.MovieTickets;
import com.movietime.model.User;
import com.movietime.repository.UserJpaRepository;

import jakarta.transaction.Transactional;
@Service
public class UserJpaService {
   
	@Autowired
    private UserJpaRepository userJpaRepository;

    public User userLogin(String email, String password) {
        Optional<User> user = userJpaRepository.findByEmailAndPassword(email, password);
        return user.orElse(null);
    }

    public User newUser(User user) {
        return userJpaRepository.save(user);
    }

    @Transactional
    public void deleteUserByEmail(String email) {
        userJpaRepository.deleteByEmail(email);
    }

  
}

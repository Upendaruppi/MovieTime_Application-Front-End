package com.movietime.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.movietime.DTO.UserAccessDTO;
import com.movietime.model.MovieTickets;
import com.movietime.model.User;
import com.movietime.repository.MovieTicketsJpaRepository;
import com.movietime.service.UserJpaService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/user")
public class UserController {

	@Autowired 
	private UserJpaService userJpaService;
	

	@PostMapping("/login")
	public User userLogin(@RequestBody UserAccessDTO userAccess) {
	    System.out.println("Received login request: " + userAccess.getEmail() + " - " + userAccess.getPassword());

	    String email = userAccess.getEmail();
	    String password = userAccess.getPassword();

	    User user = userJpaService.userLogin(email, password);
	    
	    return user;
	    
	}

	

	@PostMapping("/add")
	public User newUser(@RequestBody User user) {
		
	    return userJpaService.newUser(user);

	}


	
	@DeleteMapping("/delete/{email}")
	void deleteUserByEmail(@PathVariable String email) {
	
		userJpaService.deleteUserByEmail(email);
	
	}
	
	
	
	
}

package com.movietime.DTO;
public class UserAccessDTO {
    private String email;
    private String password;


    public UserAccessDTO() {
        // Default constructor
    }

    public UserAccessDTO(String email, String password) {
    	
        this.email = email;
        this.password = password;
    
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}

package com.movietime.DTO;

import jakarta.persistence.Column;

public class MovieDTO {


	private String movieName;

    private String director;


    private String posterLink;

	    public String getMovieName() {
	    	
		return movieName;
	
	    }


	public void setMovieName(String movieName) {
		this.movieName = movieName;
	}


	public String getDirector() {
		return director;
	}


	public void setDirector(String director) {
		this.director = director;
	}


	public String getPosterLink() {
		return posterLink;
	}


	public void setPosterLink(String posterLink) {
		this.posterLink = posterLink;
	}


}

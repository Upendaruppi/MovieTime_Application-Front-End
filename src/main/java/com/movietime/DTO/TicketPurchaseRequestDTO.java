package com.movietime.DTO;

public class TicketPurchaseRequestDTO {

	
	  private int userId;
      private int movieId;
      private String showTime;
      private String theatre;
      private String date;

      public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getTheatre() {
		return theatre;
	}

	public void setTheatre(String theatre) {
		
		this.theatre = theatre;
	
	}

	public int getUserId() {
          return userId;
      }

      public void setUserId(int userId) {
          this.userId = userId;
      }

      public int getMovieId() {
          return movieId;
      }

      public void setMovieId(int movieId) {
          this.movieId = movieId;
      }

      public String getShowTime() {
          return showTime;
      }

      public void setShowTime(String showTime) {
          this.showTime = showTime;
      }
  }


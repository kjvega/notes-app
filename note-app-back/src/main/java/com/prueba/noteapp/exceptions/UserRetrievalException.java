package com.prueba.noteapp.exceptions;

public class UserRetrievalException extends RuntimeException{
    public UserRetrievalException(String message, Throwable cause) {
        super(message, cause);
    }
}

package com.prueba.noteapp.exceptions;

public class UserRegistrationException extends RuntimeException{
    public UserRegistrationException(String message, Throwable cause) {
        super(message, cause);
    }
}

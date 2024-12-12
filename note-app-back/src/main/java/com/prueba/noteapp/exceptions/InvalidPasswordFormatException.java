package com.prueba.noteapp.exceptions;

public class InvalidPasswordFormatException extends RuntimeException{
    public InvalidPasswordFormatException(String message) {
        super(message);
    }
}

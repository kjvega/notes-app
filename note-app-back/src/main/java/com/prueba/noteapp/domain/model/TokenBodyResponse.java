package com.prueba.noteapp.domain.model;

public class TokenBodyResponse {
    String token;

    public TokenBodyResponse(String token) {
        this.token = token;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}

package com.prueba.noteapp.service;

import com.prueba.noteapp.domain.dto.CreateUserRequest;
import com.prueba.noteapp.domain.dto.CreateUserResponse;
import com.prueba.noteapp.domain.dto.UserDTO;
import com.prueba.noteapp.domain.entities.User;
import com.prueba.noteapp.domain.enums.Role;

import java.util.List;

public interface UserService {
    CreateUserResponse createUser(CreateUserRequest request, Role role);
    String authenticateUser(User user, CreateUserRequest request);
    String authenticate(CreateUserRequest request);
}

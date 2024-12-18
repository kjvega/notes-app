package com.prueba.noteapp.controller;


import com.prueba.noteapp.domain.dto.CreateUserRequest;
import com.prueba.noteapp.domain.dto.CreateUserResponse;
import com.prueba.noteapp.domain.dto.UserDTO;
import com.prueba.noteapp.domain.model.TokenBodyResponse;
import com.prueba.noteapp.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(
        value = "/api/auth",
        consumes = {"application/json"},
        produces = {"application/json"})
public class UserController {
    private static final Logger log = LoggerFactory.getLogger(UserController.class);

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }



    @Operation(summary = "Creacion de Usuario", description = "Crea un nuevo usuario.")
    @ApiResponse(responseCode = "201", description = "Usuario creado exitosamente")
    @PostMapping(value = "/register")
    ResponseEntity<CreateUserResponse> createUser(@Valid @RequestBody CreateUserRequest request) {
        log.info("Creación de usuario: {}", request);
        return new ResponseEntity<>(userService.createUser(request, request.role()), HttpStatus.CREATED);
    }

    @Operation(
            summary = "Autenticar a un usuario y devolver un token",
            description = "Autentica al usuario y proporciona un token")
    @ApiResponse(responseCode = "200", description = "Inicio de sesion satisfactoria")
    @PostMapping(value = "/login")
    public ResponseEntity<CreateUserResponse<TokenBodyResponse>> authenticate(@RequestBody CreateUserRequest request) {
        log.info("Autenticación de usuario : {}", request);
        CreateUserResponse<TokenBodyResponse> response = new CreateUserResponse<>();
        String token = userService.authenticate(request);
        response.setBody(new TokenBodyResponse(token));
        response.setMessage("Inicio de sesion satisfactoria.");
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}

package com.prueba.lexart.domain.dto;

public record NoteDTO(
        Long id,
        String title,
        String description,
        Long version,
        Long userId
) {


}

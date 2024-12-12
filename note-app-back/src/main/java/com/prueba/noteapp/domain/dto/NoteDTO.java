package com.prueba.noteapp.domain.dto;

public record NoteDTO(
        Long id,
        String title,
        String description,
        Long version,
        Long userId
) {


}

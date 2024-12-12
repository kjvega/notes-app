package com.prueba.noteapp.domain.dto;

import jakarta.persistence.Column;

import java.time.LocalDateTime;

public record NoteDTO(
        Long id,
        String title,
        String description,
        Long version,
        Long userId,
        LocalDateTime createdAt,
        LocalDateTime updatedAt
) {


}

package com.prueba.noteapp.domain.dto;

import lombok.*;

import java.time.LocalDateTime;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class NoteResponseDTO {
     Long id;
     String title;
     String description;
     Long version;
     Long userId;
     LocalDateTime createdAt;
     LocalDateTime updatedAt;
}

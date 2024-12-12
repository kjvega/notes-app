package com.prueba.noteapp.domain.dto;

import lombok.*;


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
}

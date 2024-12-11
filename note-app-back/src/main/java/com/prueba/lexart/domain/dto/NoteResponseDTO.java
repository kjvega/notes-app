package com.prueba.lexart.domain.dto;

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
}

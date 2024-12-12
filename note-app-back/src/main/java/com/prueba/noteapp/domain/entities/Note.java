package com.prueba.noteapp.domain.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "notes")
public class Note {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "notes_id_generator")
    @SequenceGenerator(name="notes_id_generator", sequenceName = "notes_id_seq")
    private Long id;
    private String title;
    private String description;
    private Long version;
    private Long userId;
}
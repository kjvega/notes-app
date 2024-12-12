package com.prueba.noteapp.repository;

import com.prueba.noteapp.domain.entities.Note;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NoteRepository extends JpaRepository<Note,Long> {
    List<Note> findAllByUserId(Long userId);
    List<Note> findAllById(Long id);
}

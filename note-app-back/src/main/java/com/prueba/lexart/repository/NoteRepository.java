package com.prueba.lexart.repository;

import com.prueba.lexart.domain.entities.Note;
import com.prueba.lexart.domain.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface NoteRepository extends JpaRepository<Note,Long> {
}

package com.prueba.noteapp.service;

import com.prueba.noteapp.domain.dto.NoteDTO;
import com.prueba.noteapp.domain.dto.NoteResponseDTO;

import java.util.List;

public interface NoteService {
    List<NoteResponseDTO> getAllNote();
    NoteDTO saveNote(NoteDTO noteDTO);

    NoteDTO updateNote(Long id, NoteDTO noteDTO);

    void deleteNote(Long id);
}

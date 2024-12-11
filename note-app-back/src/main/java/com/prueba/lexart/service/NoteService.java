package com.prueba.lexart.service;

import com.prueba.lexart.domain.dto.NoteDTO;
import com.prueba.lexart.domain.dto.NoteResponseDTO;

import java.util.List;

public interface NoteService {
    List<NoteResponseDTO> getAllNote();
    NoteDTO saveNote(NoteDTO noteDTO);

    NoteDTO updateNote(Long id, NoteDTO noteDTO);

    void deleteNote(Long id);
}

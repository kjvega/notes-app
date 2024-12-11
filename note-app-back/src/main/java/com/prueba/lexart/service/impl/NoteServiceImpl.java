package com.prueba.lexart.service.impl;

import com.prueba.lexart.domain.dto.NoteDTO;
import com.prueba.lexart.domain.dto.NoteResponseDTO;
import com.prueba.lexart.domain.entities.Note;
import com.prueba.lexart.domain.mapper.NoteMapper;
import com.prueba.lexart.repository.NoteRepository;
import com.prueba.lexart.service.NoteService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class NoteServiceImpl implements NoteService {
    private final NoteRepository noteRepository;

    public NoteServiceImpl(NoteRepository noteRepository) {
        this.noteRepository = noteRepository;
    }

    @Override
    public List<NoteResponseDTO> getAllNote() {

        return noteRepository.findAll().stream()
                .map(NoteMapper::toNoteResponseDTO)
                .collect(Collectors.toList());
    }

    @Override
    public NoteDTO saveNote(NoteDTO noteDTO) {
        Note note = NoteMapper.toNote(noteDTO);
        return NoteMapper.toNoteDTO(noteRepository.save(note));
    }

    @Override
    public NoteDTO updateNote(Long id, NoteDTO noteDTO) {
        Note note = noteRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Nota no encontrada"));

        note.setTitle(noteDTO.title());
        note.setDescription(noteDTO.description());
        note.setVersion(noteDTO.version());

        // Guardar los cambios
        Note updatedNote = noteRepository.save(note);

        // Convertir la entidad actualizada a DTO y retornarla
        return NoteMapper.toNoteDTO(updatedNote);
    }

    @Override
    public void deleteNote(Long id) {
        noteRepository.deleteById(id);
    }


}

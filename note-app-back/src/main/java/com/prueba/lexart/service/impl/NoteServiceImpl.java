package com.prueba.lexart.service.impl;

import com.prueba.lexart.domain.dto.NoteDTO;
import com.prueba.lexart.domain.dto.NoteResponseDTO;
import com.prueba.lexart.domain.entities.Note;
import com.prueba.lexart.domain.entities.User;
import com.prueba.lexart.domain.mapper.NoteMapper;
import com.prueba.lexart.repository.NoteRepository;
import com.prueba.lexart.repository.UserRepository;
import com.prueba.lexart.service.NoteService;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class NoteServiceImpl implements NoteService {
    private final NoteRepository noteRepository;
    private final UserRepository userRepository;

    public NoteServiceImpl(NoteRepository noteRepository, UserRepository userRepository) {
        this.noteRepository = noteRepository;
        this.userRepository = userRepository;
    }

    @Override
    public List<NoteResponseDTO> getAllNote() {

        String userEmail = SecurityContextHolder.getContext().getAuthentication().getName();
        Long userId = userRepository.findByEmail(userEmail)
                .map(User::getId)
                .orElseThrow(() -> new UsernameNotFoundException("Usuario no encontrado con email: " + userEmail));

        return noteRepository.findAllByUserId(Long.valueOf(userId)).stream()
                .map(NoteMapper::toNoteResponseDTO)
                .collect(Collectors.toList());
    }

    @Override
    public NoteDTO saveNote(NoteDTO noteDTO) {
        String userEmail = SecurityContextHolder.getContext().getAuthentication().getName();
        Long userId = userRepository.findByEmail(userEmail)
                .map(User::getId)
                .orElseThrow(() -> new UsernameNotFoundException("Usuario no encontrado con email: " + userEmail));

        Note note = NoteMapper.toNote(noteDTO);
        note.setUserId(userId);
        return NoteMapper.toNoteDTO(noteRepository.save(note));
    }

    @Override
    public NoteDTO updateNote(Long id, NoteDTO noteDTO) {
        Note note = noteRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Nota no encontrada"));

        if (!note.getVersion().equals(noteDTO.version())) {
            throw new RuntimeException("La versión de la nota no coincide. Está tratando de actualizar una nota desactualizada.");

        }

        note.setTitle(noteDTO.title());
        note.setDescription(noteDTO.description());
        note.setVersion(noteDTO.version()+1);

        Note updatedNote = noteRepository.save(note);

        return NoteMapper.toNoteDTO(updatedNote);
    }

    @Override
    public void deleteNote(Long id) {
        noteRepository.deleteById(id);
    }


}

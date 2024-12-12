package com.prueba.noteapp.controller;


import com.prueba.noteapp.domain.dto.NoteDTO;
import com.prueba.noteapp.domain.dto.NoteResponseDTO;
import com.prueba.noteapp.service.NoteService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/notes")
public class NoteController {
    private final NoteService noteService;

    public NoteController(NoteService noteService) {
        this.noteService = noteService;
    }

    @GetMapping()
    public ResponseEntity<List<NoteResponseDTO>> getAllNotes(){
        return ResponseEntity.ok(noteService.getAllNote());
    }

    @PostMapping
    public ResponseEntity<NoteDTO> saveNote(@RequestBody NoteDTO noteDTO){
        return ResponseEntity.ok(noteService.saveNote(noteDTO));

    }

    @PutMapping("/{id}")
    public ResponseEntity<NoteDTO> updateNote(@PathVariable Long id, @RequestBody NoteDTO noteDTO){
        return ResponseEntity.ok(noteService.updateNote(id,noteDTO));

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteNote(@PathVariable Long id) {
        noteService.deleteNote(id);
        return ResponseEntity.noContent().build();
    }

}

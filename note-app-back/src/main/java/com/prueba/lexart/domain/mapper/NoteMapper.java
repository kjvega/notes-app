package com.prueba.lexart.domain.mapper;

import com.prueba.lexart.domain.dto.NoteDTO;
import com.prueba.lexart.domain.dto.NoteResponseDTO;
import com.prueba.lexart.domain.entities.Note;


public class NoteMapper {

    public static NoteDTO toNoteDTO(Note note){

        return new NoteDTO(
                note.getId(),
                note.getTitle(),
                note.getDescription(),
                note.getVersion()
              );
    }

    public static Note toNote(NoteDTO NoteDTO){
        Note note = new Note();
        note.setId(NoteDTO.id());
        note.setTitle(NoteDTO.title());
        note.setDescription(NoteDTO.description());
        note.setVersion(NoteDTO.version());

        return note;
    }

    public static NoteResponseDTO toNoteResponseDTO(Note note){
        NoteResponseDTO noteResponseDTO = new NoteResponseDTO();

        noteResponseDTO.setId(note.getId());
        noteResponseDTO.setTitle(note.getTitle());
        noteResponseDTO.setDescription(note.getDescription());
        noteResponseDTO.setVersion(note.getVersion());

        return noteResponseDTO;

    }
}

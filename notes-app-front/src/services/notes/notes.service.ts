import { Injectable } from '@angular/core';
import { mainUrl } from '../../envairoments/envairoment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Note, NoteSave } from '../../models/note/note-model';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private notesUrl = mainUrl + 'api/notes';

  constructor(private http: HttpClient) { }

  getAllNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.notesUrl);

  }

  saveNote(note: NoteSave): Observable<Note> {
    return this.http.post<Note>(this.notesUrl, note);

  }

  editNote(id:number,  note: NoteSave): Observable<Note> {
    return this.http.put<Note>(this.notesUrl+'/'+id, note);

  }

  deleteNote(noteId: number): Observable<any> {
    return this.http.delete<any>(this.notesUrl + '/' + noteId);
  }

}

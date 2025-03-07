package com.app.MisTareas.domain.task;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.time.LocalDate;

@Table(name = "tasks")
@Entity(name = "Task")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @Enumerated(EnumType.STRING)
    private Subject subject;

    private LocalDate date;
    private Boolean completed;

    public Task(){

    }

    public Task(Subject subject, String title, LocalDate date) {
        this.subject = subject;
        this.title = title;
        this.date = date;
        this.completed = false;
    }

    public Task(DataCreateTask newTask){
        this.title = newTask.title();
        this.date = newTask.date();
        this.subject = newTask.subject();
        this.completed = false;
    }

    public void complete(){
        this.completed = true;
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public Subject getSubject() {
        return subject;
    }

    public LocalDate getDate() {
        return date;
    }

    public Boolean getCompleted() {
        return completed;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setSubject(Subject subject) {
        this.subject = subject;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public void setCompleted(Boolean completed) {
        this.completed = completed;
    }
}

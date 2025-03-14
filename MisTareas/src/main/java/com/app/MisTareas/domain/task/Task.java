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
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "task_seq")
    @SequenceGenerator(name = "task_seq", sequenceName = "task_sequence", allocationSize = 1)
    private Long id;

    private String title;

    private String subject;

    private LocalDate date;
    private Boolean completed;

    public Task(String subject, String title, LocalDate date) {
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

    public void updateTask(DataUpdateTask dataUpdateTask){
        if (dataUpdateTask.title() != null) {
            this.title = dataUpdateTask.title();
        }
        if (dataUpdateTask.subject() != null) {
            this.subject = dataUpdateTask.subject();
        }
        if (dataUpdateTask.date() != null) {
            this.date = dataUpdateTask.date();
        }
    }

    public void toggleTaskCompleted(){
        this.completed = !this.completed;
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getSubject() {
        return subject;
    }

    public LocalDate getDate() {
        return date;
    }

    public Boolean isCompleted() {
        return completed;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public void setCompleted(Boolean completed) {
        this.completed = completed;
    }
}

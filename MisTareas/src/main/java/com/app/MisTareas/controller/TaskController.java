package com.app.MisTareas.controller;

import com.app.MisTareas.domain.task.DataCreateTask;
import com.app.MisTareas.domain.task.Task;
import com.app.MisTareas.domain.task.TaskRepository;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;
import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/tasks")
//@CrossOrigin(origins = "https://mis-tareas-d40a2.web.app")
public class TaskController {
    @Autowired
    private TaskRepository taskRepository;

    @PostMapping
    public ResponseEntity<Void> createTask(@RequestBody @Valid DataCreateTask newTask, UriComponentsBuilder uriComponentsBuilder){
        Task task = taskRepository.save(new Task(newTask));
        URI url = uriComponentsBuilder.path("/tasks/{id}").buildAndExpand(task.getId()).toUri();
        return ResponseEntity.created(url).build();
    }

    @GetMapping
    public ResponseEntity<List<Task>> getIncompleteTasks(){
        return ResponseEntity.ok(taskRepository.findByCompletedFalseOrderByDateAsc());
    }

    @GetMapping("/completed")
    public ResponseEntity<List<Task>> getCompletedTasks(){
        return ResponseEntity.ok(taskRepository.findByCompletedTrueOrderByDateAsc());
    }

    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity completeTask(@PathVariable Long id){
        Task task = taskRepository.getReferenceById(id);
        task.complete();
        return ResponseEntity.noContent().build();
    }
}

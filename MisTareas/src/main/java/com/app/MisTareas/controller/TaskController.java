package com.app.MisTareas.controller;

import com.app.MisTareas.domain.task.DataCreateTask;
import com.app.MisTareas.domain.task.DataUpdateTask;
import com.app.MisTareas.domain.task.Task;
import com.app.MisTareas.domain.task.TaskRepository;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;
import java.net.URI;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/tasks")
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

    //Toggle Task Completed
    @PutMapping("/{id}/complete")
    @Transactional
    public ResponseEntity<Void> completeTask(@PathVariable Long id) {
        Optional<Task> taskOpt = taskRepository.findById(id);
        if (taskOpt.isPresent()) {
            Task task = taskOpt.get();
            task.toggleTaskCompleted();
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    //Update Task
    @PutMapping("/{id}")
    @Transactional
    public ResponseEntity<Void> updateTask(@PathVariable Long id, @RequestBody @Valid DataUpdateTask saveTask) {
        Optional<Task> taskOpt = taskRepository.findById(id);
        if (taskOpt.isPresent()) {
            Task task = taskOpt.get();
            task.updateTask(saveTask);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity<Void> deleteTask(@PathVariable Long id){
        taskRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}

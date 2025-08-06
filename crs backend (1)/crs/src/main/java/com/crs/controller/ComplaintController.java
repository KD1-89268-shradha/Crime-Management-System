package com.crs.controller;

import com.crs.dto.ComplaintDTO;
import com.crs.service.ComplaintService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/complaints")
public class ComplaintController {

    @Autowired
    private ComplaintService complaintService;
    
    @PostMapping("/register")
    public ResponseEntity<ComplaintDTO> registerComplaint(@RequestBody ComplaintDTO complaintDTO) {
        ComplaintDTO createdComplaint = complaintService.createComplaint(complaintDTO);
        return ResponseEntity.ok(createdComplaint);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<ComplaintDTO> getComplaintById(@PathVariable Long id) {
        ComplaintDTO complaintDTO = complaintService.getComplaintById(id);
        return ResponseEntity.ok(complaintDTO);
    }
    
    @GetMapping("/")
    public ResponseEntity<List<ComplaintDTO>> getAllComplaints() {
        List<ComplaintDTO> complaints = complaintService.getAllComplaints();
        return ResponseEntity.ok(complaints);
    }

    @GetMapping("/policeStation/{policeStationId}")
    public ResponseEntity<List<ComplaintDTO>> getAllComplaintsByPoliceStation(@PathVariable Long policeStationId) {
        List<ComplaintDTO> complaints = complaintService.getAllComplaintsByPoliceStation(policeStationId);
        return ResponseEntity.ok(complaints);
    }

    @GetMapping("/Pending")
    public ResponseEntity<List<ComplaintDTO>> getAllPendingComplaints() {
        List<ComplaintDTO> complaints = complaintService.getAllPendingComplaints();
        return ResponseEntity.ok(complaints);
    }

    @GetMapping("/Pending/{policeStationId}")
    public ResponseEntity<List<ComplaintDTO>> getAllPendingComplaintsByPoliceStation(@PathVariable Long policeStationId) {
        List<ComplaintDTO> complaints = complaintService.getAllPendingComplaintsByPoliceStation(policeStationId);
        return ResponseEntity.ok(complaints);
    }

   
}

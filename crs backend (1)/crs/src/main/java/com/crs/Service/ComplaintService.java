package com.crs.service;

import com.crs.entities.Complaint;
import com.crs.dto.ComplaintDTO;
import java.util.List;

public interface ComplaintService {
    ComplaintDTO createComplaint(ComplaintDTO complaintDTO);
    ComplaintDTO getComplaintById(Long id);
    List<ComplaintDTO> getAllComplaints();
    List<ComplaintDTO> getAllComplaintsByPoliceStation(Long policeStationId);
    List<ComplaintDTO> getAllPendingComplaints();
    List<ComplaintDTO> getAllPendingComplaintsByPoliceStation(Long policeStationId);





}

package com.crs.service.impl;

import com.crs.dao.ComplaintRepository;
import com.crs.dao.PoliceOfficerRepository;
import com.crs.dao.PoliceStationRepository;
import com.crs.dao.UserRepository;
import com.crs.dto.ComplaintDTO;
import com.crs.entities.Complaint;
import com.crs.entities.ComplaintStatus;
import com.crs.entities.ComplaintType;
import com.crs.entities.PoliceOfficer;
import com.crs.entities.PoliceStation;
import com.crs.entities.User;
import com.crs.service.ComplaintService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ComplaintServiceImpl implements ComplaintService {

    @Autowired
    private ComplaintRepository complaintRepository;
    
    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private PoliceStationRepository policeStationRepository;

    @Autowired
    private PoliceOfficerRepository policeOfficerRepository;

//    @Override
//    public ComplaintDTO createComplaint(ComplaintDTO complaintDTO) {
//        Complaint complaint = new Complaint();
//        // Map DTO to entity
//        complaint.setTitle(complaintDTO.getTitle());
//        complaint.setComplaintType(ComplaintType.valueOf(complaintDTO.getComplaintType()));
//        complaint.setComplaintDescription(complaintDTO.getComplaintDescription());
//        complaint.setCrimeDate(complaintDTO.getCrimeDate().atStartOfDay()); // Convert LocalDate to LocalDateTime
//        complaint.setSuspectName(complaintDTO.getSuspectName());
//        complaint.setSuspectAddress(complaintDTO.getSuspectAddress());
//
//        User user = userRepository.findById(complaintDTO.getUserId()).orElse(null);
//        complaint.setUser(user);
//
//        PoliceStation policeStation = policeStationRepository.findById(complaintDTO.getAssignedPoliceStationId()).orElse(null);
//        complaint.setAssignedPoliceStation(policeStation);
//
//        PoliceOfficer policeOfficer = policeOfficerRepository.findById(complaintDTO.getAssignedPoliceOfficerId()).orElse(null);
//        complaint.setAssignedPoliceOfficer(policeOfficer);
//
//        complaint.setStatusName(ComplaintStatus.valueOf(complaintDTO.getStatusName()));
//        complaint.setIsDeleted(complaintDTO.getIsDeleted());
//
//        Complaint savedComplaint = complaintRepository.save(complaint);
//        return convertToDTO(savedComplaint);
//    }
    
    @Override
    public ComplaintDTO createComplaint(ComplaintDTO complaintDTO) {
        Complaint complaint = new Complaint();
        // Map DTO to entity
        complaint.setTitle(complaintDTO.getTitle());
        complaint.setComplaintType(ComplaintType.valueOf(complaintDTO.getComplaintType()));
        complaint.setComplaintDescription(complaintDTO.getComplaintDescription());
        complaint.setCrimeDate(complaintDTO.getCrimeDate().atStartOfDay()); // Convert LocalDate to LocalDateTime
        complaint.setSuspectName(complaintDTO.getSuspectName());
        complaint.setSuspectAddress(complaintDTO.getSuspectAddress());

        User user = userRepository.findById(complaintDTO.getUserId()).orElse(null);
        complaint.setUser(user);

        PoliceStation policeStation = policeStationRepository.findById(complaintDTO.getAssignedPoliceStationId()).orElse(null);
        complaint.setAssignedPoliceStation(policeStation);

        PoliceOfficer policeOfficer = policeOfficerRepository.findById(complaintDTO.getAssignedPoliceOfficerId()).orElse(null);
        complaint.setAssignedPoliceOfficer(policeOfficer);

        complaint.setStatusName(ComplaintStatus.valueOf(complaintDTO.getStatusName()));
        complaint.setIsDeleted(complaintDTO.getIsDeleted());

        Complaint savedComplaint = complaintRepository.save(complaint);
        return convertToDTO(savedComplaint);
    }

    @Override
    public ComplaintDTO getComplaintById(Long id) {
        return complaintRepository.findById(id)
                .map(this::convertToDTO)
                .orElse(null);
    }

    @Override
    public List<ComplaintDTO> getAllComplaints() {
        return complaintRepository.findAll().stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public List<ComplaintDTO> getAllComplaintsByPoliceStation(Long policeStationId) {
        return complaintRepository.findByAssignedPoliceStationId(policeStationId).stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public List<ComplaintDTO> getAllPendingComplaints() {
        return complaintRepository.findByStatusName("Pending").stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public List<ComplaintDTO> getAllPendingComplaintsByPoliceStation(Long policeStationId) {
        return complaintRepository.findByAssignedPoliceStationIdAndStatusName(policeStationId, "Pending").stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    
}

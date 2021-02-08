package com.example.employeebackend.controller;

import com.example.employeebackend.exception.ResourceNotFoundException;
import com.example.employeebackend.model.Employee;
import com.example.employeebackend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//브라우저가 잡아내는 동일 출처 정책(Same-orgin policy)를 무시하기 위해 CrossOrigin 어노테이션으로 허용할 origins를 명시한다.
//동일 출처 정책은 요청을 보낸 곳과 받는 곳이 서로 일치해야한다는 정책이며 일치한다는건 ip와 port 까지 다 같은 것을 의미한다.
//하지만 이를 다 지키면 웹이 성립될리 없다.
@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmployController {

    @Autowired
    private EmployeeRepository employeeRepository;

    //모든 직원 조회
    @GetMapping("/employees")
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    @PostMapping("/employees")
    public Employee createEmployee(@RequestBody Employee employee){
        return employeeRepository.save(employee);
    }

    @PutMapping("/employees/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employeeDetail){
        Employee employee = employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id = " + id));
        employee.setFirstName(employeeDetail.getFirstName());
        employee.setLastName(employeeDetail.getLastName());
        employee.setEmailId(employeeDetail.getEmailId());

        Employee updateEmployee = employeeRepository.save(employee);
        return ResponseEntity.ok(updateEmployee);
    }
}

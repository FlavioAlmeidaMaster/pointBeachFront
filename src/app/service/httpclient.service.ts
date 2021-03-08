import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

export class Employee {
  constructor(
    public empId: string,
    public name: string,
    public designation: string,
    public salary: string
  ) {}
}

@Injectable({
  providedIn: "root"
})
export class HttpClientService {
  constructor(private httpClient: HttpClient) {}

  getEmployees() {
    return this.httpClient.get<Employee[]>("http://localhost:8081/api/login");
  }

  public deleteEmployee(employee) {
    return this.httpClient.delete<Employee>(
      "http://localhost:8081/api/login" + "/" + employee.empId
    );
  }

  public createEmployee(employee) {
    return this.httpClient.post<Employee>(
      "http://localhost:8081/api/login",
      employee
    );
  }
}

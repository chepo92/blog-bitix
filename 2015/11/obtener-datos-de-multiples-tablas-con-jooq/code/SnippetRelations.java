// Main.java
System.out.println();
System.out.println("# Relations (1+N)");
DepartmentRecord department = service.findDepartment(1l);
List<EmployeeDepartmentRecord> eds = department.fetchChildren(Keys.DEPARTMENT_ID);
for (EmployeeDepartmentRecord ed : eds) {
    EmployeeRecord employee = ed.fetchParent(Keys.EMPLOYEE_ID);    
    System.out.printf("%s %s%n", employee.getName(), department.getName());
}

// DefaultAppService.java
@Override
public DepartmentRecord findDepartment(long id) {
    return context.select().from(Tables.DEPARTMENT).where(Tables.DEPARTMENT.ID.eq(id)).fetchOneInto(DepartmentRecord.class);
}
// Main.java
System.out.println();
System.out.println("# Multipletables (no 1+N)");
List<RecordContainer> data = service.findDepartmentEmployees(1l);
data.stream().forEach((RecordContainer c) -> {
    System.out.printf("%s %s%n", c.getEmployee().getName(), c.getDepartment().getName());
});

// DefaultAppService.java
@Override
public List<RecordContainer> findDepartmentEmployees(Long id) {
	return context.select().from(Tables.DEPARTMENT).join(Tables.EMPLOYEE_DEPARTMENT).on(Tables.DEPARTMENT.ID.eq(Tables.EMPLOYEE_DEPARTMENT.DEPARTMENT_ID))
		.join(Tables.EMPLOYEE).on(Tables.EMPLOYEE.ID.eq(Tables.EMPLOYEE_DEPARTMENT.EMPLOYEE_ID)).where(Tables.DEPARTMENT.ID.eq(id))
		.fetch((Record record) -> {
			RecordContainer container = new RecordContainer();
			container.setEmployee(record.into(EmployeeRecord.class));
			container.setDepartment(record.into(DepartmentRecord.class));
			return container;
	});
}
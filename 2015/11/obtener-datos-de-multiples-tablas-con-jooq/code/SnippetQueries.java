// Main.java
System.out.printf("Number employees: %d%n", service.countEmployees());
System.out.printf("Number departments: %d%n", service.countDepartments());

// DefaultServiceImpl.java
@Override
public long countEmployees() {
	return context.selectCount().from(Tables.EMPLOYEE).fetchOneInto(Long.class);
}

@Override
public long countDepartments() {
	return context.selectCount().from(Tables.DEPARTMENT).fetchOneInto(Long.class);
}
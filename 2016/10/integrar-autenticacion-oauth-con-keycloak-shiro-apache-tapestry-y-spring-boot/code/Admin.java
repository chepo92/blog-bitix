package io.github.picodotdev.keycloak.pages;

import org.apache.shiro.authz.annotation.RequiresRoles;

@RequiresRoles("admin")
public class Admin {
}
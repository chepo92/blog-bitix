package io.github.picodotdev.blogbitix.spring2fa.spring;

...

public class Utils {

    public static void setAuthentication() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        UserDetailsAdapter userDetailsAdapter = (UserDetailsAdapter) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        List<GrantedAuthority> authorities = AuthorityUtils.createAuthorityList(userDetailsAdapter.getAccount().getRoles().toArray(new String[0]));

        Authentication newAuth = new UsernamePasswordAuthenticationToken(authentication.getPrincipal(), authentication.getCredentials(), authorities);
        SecurityContextHolder.getContext().setAuthentication(newAuth);
    }
}

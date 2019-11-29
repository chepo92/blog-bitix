package io.github.picodotdev.blogbitix.spring2fa.spring;

...

public class SecondFactorAuthenticationSuccessHandler implements AuthenticationSuccessHandler {
  
    private RedirectStrategy redirectStrategy = new DefaultRedirectStrategy();
 
    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException {
        handle(request, response, authentication);
        clearAuthenticationAttributes(request);
    }
 
    protected void handle(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException {
          String targetUrl = getTargetUrl(authentication);
 
        if (response.isCommitted()) {
            return;
        }
 
        redirectStrategy.sendRedirect(request, response, targetUrl);
    }
 
    protected String getTargetUrl(Authentication authentication) {
        UserDetailsAdapter userDetailsAdapter = (UserDetailsAdapter) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (userDetailsAdapter.getAccount().isAuth2fa()) {
            return "/code";
        } else {
            Utils.setAuthentication();
            return "/home";
        }
    }
 
    protected void clearAuthenticationAttributes(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        if (session == null) {
            return;
        }
        session.removeAttribute(WebAttributes.AUTHENTICATION_EXCEPTION);
    }
 
    public void setRedirectStrategy(RedirectStrategy redirectStrategy) {
        this.redirectStrategy = redirectStrategy;
    }
    protected RedirectStrategy getRedirectStrategy() {
        return redirectStrategy;
    }
}
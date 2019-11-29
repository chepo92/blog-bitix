package io.github.picodotdev.blogbitix.spring2fa.spring;

...

@Controller
@RequestMapping("/code")
public class CodeController {

    @Autowired
    private AccountRepository accountRepository;

    @RequestMapping(method = RequestMethod.GET)
    public String showCodeForm() {
        return "code";
    }

    @RequestMapping(method = RequestMethod.POST)
    public String verifyCode(String code) {
        try {
            UserDetailsAdapter userDetailsAdapter = (UserDetailsAdapter) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
            Totp totp = new Totp(userDetailsAdapter.getAccount().getSecret());
            if (!isValidLong(code) || !totp.verify(code)) {
                throw new VerificationCodeException("invalid key");
            }

            Utils.setAuthentication();
            return "redirect:/home";
        } catch (NumberFormatException e) {
            e.printStackTrace();
        } catch (VerificationCodeException e) {
            e.printStackTrace();
        }
        return "redirect:/code?error";
    }

    private boolean isValidLong(String code) {
        try {
            Long.parseLong(code);
        } catch (NumberFormatException e) {
            return false;
        }
        return true;
    }
}

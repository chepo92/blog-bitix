package io.github.picodotdev.blogbitix.spring2fa.spring;

...

@Component
@Primary
public class UserDetailsServiceAdapter implements UserDetailsService {

    @Autowired
    private AccountRepository accountRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Account account = accountRepository.find(username);

        if (account == null) {
            throw new UsernameNotFoundException(username);
        }

        return new UserDetailsAdapter(account);
    }
}

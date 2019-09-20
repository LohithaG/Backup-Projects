package com.mbb.mbbplatform.auth;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mbb.mbbplatform.domain.User;
import com.mbb.mbbplatform.domain.UserRole;
import com.mbb.mbbplatform.repos.RoleRepository;
import com.mbb.mbbplatform.repos.UserRepository;
import com.mbb.mbbplatform.repos.UserRoleRepository;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private UserRoleRepository userRoleRepository;

	@Autowired
	private RoleRepository roleRepository;

	@Override
	@Transactional(readOnly = true)
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		User user = userRepository.findByEmail(email);
		Set<UserRole> userrole = userRoleRepository.findByUserid(user.getId());
		Set<GrantedAuthority> grantedAuthorities = new HashSet<>();
		for (UserRole role : userrole) {
			String rolename = roleRepository.findById(role.getRoleid()).get().getName();
			grantedAuthorities.add(new SimpleGrantedAuthority(rolename));
		}
		return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(),
				grantedAuthorities);
	}
}

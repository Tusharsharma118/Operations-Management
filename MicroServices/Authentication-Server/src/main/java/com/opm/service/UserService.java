package com.opm.service;

import com.opm.dto.AuthTokenDTO;
import com.opm.dto.AuthenticationDTO;


public interface UserService {
	public boolean addUser(AuthenticationDTO user);
	
	public String authenticateUser(AuthenticationDTO authUser);
	
	public AuthTokenDTO getParsedToken(String token);

}

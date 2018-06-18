/**
 * 
 */
package com.opm.token.service;

import com.opm.dto.AuthTokenDTO;


public interface TokenService {
	public String createJsonWebToken(AuthTokenDTO authTokenDetailsDTO);
	
	public AuthTokenDTO parseAndReturn(String token);

}

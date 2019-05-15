package com.trandat.iPixz.utils;

import lombok.Getter;
import lombok.Setter;

import java.util.HashMap;
import java.util.Map;

@Setter
@Getter
public class StatusResponse {
	private String status;
	private int code;
	Map<String, Object> result = new HashMap<>();
	
	public StatusResponse() {}
	
	public StatusResponse(int code, String status) {
		this.code = code;
		this.status = status;
	}
	
	public StatusResponse withField(String field, Object value) {
		result.put(field, value);
		return this;
	}
	
	public StatusResponse code(int code) {
		this.code = code;
		return this;
	}
	
	public StatusResponse status(String status) {
		this.status = status;
		return this;
	}
}

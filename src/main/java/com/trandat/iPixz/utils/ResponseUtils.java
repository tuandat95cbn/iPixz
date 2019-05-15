package com.trandat.iPixz.utils;

import java.util.HashMap;
import java.util.Map;

public class ResponseUtils {
	public static final String REQUEST_SUCCESS="SUCCESS";
	public static final String REQUEST_ERROR="ERROR";

	public static Map<String,Object> returnSuccess(){
		Map<String,Object> suc= new HashMap<String, Object>();
		suc.put("status", REQUEST_SUCCESS);
		return suc;
	}
	

	public static Map<String,Object> returnError(){
		Map<String,Object> err= new HashMap<String, Object>();
		err.put("status", REQUEST_ERROR);
		return err;
	}
	
	public static StatusResponse success() {
		return new StatusResponse(200, REQUEST_SUCCESS);
	}
	
	public static StatusResponse error() {
		return new StatusResponse(400, REQUEST_ERROR);
	}
	
	
	public static Map<String,Object> returnError(String msg){
		Map<String,Object> err= new HashMap<String, Object>();
		err.put("status", msg);
		return err;
	}
}

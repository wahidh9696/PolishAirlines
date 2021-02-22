package com.Pages;

public class PageObjectManager {
	
	private PageObjectManager() {
	}
	
	private static PageObjectManager manager;
	private HomePage home;
	
	public static PageObjectManager getManager() {
		return manager==null?manager=new PageObjectManager():manager;
	}
	public HomePage getHome() {
		return home==null?home=new HomePage():home;
	}
	
	
	

}

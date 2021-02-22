package baseClass;

import java.io.File;
import java.util.LinkedList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class JVMReport {
	
	public static void generateJVMReport(String json) {

		File f=new File("C:\\Users\\ELCOT\\eclipse-workspace\\PolishAirlines\\src\\test\\resources\\Reports");
		
		Configuration con=new Configuration(f, "Poland Airlines");
		con.addClassifications("BrowserName", "Chrome");
		con.addClassifications("BrowserVersion", "88");
		con.addClassifications("OS", "Windows 10");
		con.addClassifications("Sprint", "10");
		
		List<String> jsonFiles=new LinkedList<String>();
		jsonFiles.add(json);
		
		ReportBuilder r=new ReportBuilder(jsonFiles, con);
		r.generateReports();
		
		
	}
	
	

}

package com;
 
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.net.URL;
 
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
 
import org.apache.cxf.helpers.IOUtils;
import org.apache.cxf.io.CachedOutputStream;
import org.json.simple.JSONObject;
 
@WebServlet("/PublicData.do")
public class PublicData extends HttpServlet {
    private static final long serialVersionUID = 1L;
        
    public PublicData() {
        super();
    }
 
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("utf-8");
        response.setContentType("text/html; charset=utf-8");
         
        String addr = "http://api.visitkorea.or.kr/openapi/service/rest/KorService/searchFestival?ServiceKey=";
        String serviceKey = "NeY6vrAzQALMejlczV67QgoCoDQ%2BH42nmqFoOmGFHIhlEDIKJCNOGjoA%2BDCgxSE1HYmEuWflWjErftN%2F5MHjnQ%3D%3D";
        String parameter = "";
//      serviceKey = URLEncoder.encode(serviceKey,"utf-8");
        PrintWriter out = response.getWriter();
        parameter = parameter + "&" + "areaCode=1";
        parameter = parameter + "&" + "eventStartDate=20170101";
        parameter = parameter + "&" + "eventEndDate=20171231";
        parameter = parameter + "&" + "pageNo=1&numOfRows=100";
        parameter = parameter + "&" + "MobileOS=ETC";
        parameter = parameter + "&" + "MobileApp=aa";
        parameter = parameter + "&" + "_type=json";
         
         
        addr = addr + serviceKey + parameter;
        URL url = new URL(addr);
         
        InputStream in = url.openStream(); 
        CachedOutputStream bos = new CachedOutputStream();
        IOUtils.copy(in, bos);
        in.close();
        bos.close();
         
//      out.println(addr);
         
        String data = bos.getOut().toString();      
        out.println(data);
         
        JSONObject json = new JSONObject();
        json.put("data", data);
    }
 
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("utf-8");
        response.setContentType("text/html; charset=utf-8");
         
        String addr = "http://api.visitkorea.or.kr/openapi/service/rest/KorService/searchFestival?ServiceKey=";
        String serviceKey = "NeY6vrAzQALMejlczV67QgoCoDQ%2BH42nmqFoOmGFHIhlEDIKJCNOGjoA%2BDCgxSE1HYmEuWflWjErftN%2F5MHjnQ%3D%3D";
        String parameter = "";
//      serviceKey = URLEncoder.encode(serviceKey,"utf-8");
        PrintWriter out = response.getWriter();
        parameter = parameter + "&" + "areaCode=1";
        parameter = parameter + "&" + "eventStartDate=20170101";
        parameter = parameter + "&" + "eventEndDate=20171231";
        parameter = parameter + "&" + "pageNo=1&numOfRows=100";
        parameter = parameter + "&" + "MobileOS=ETC";
        parameter = parameter + "&" + "MobileApp=aa";
        parameter = parameter + "&" + "_type=json";
         
         
        addr = addr + serviceKey + parameter;
        URL url = new URL(addr);
         
        InputStream in = url.openStream(); 
        CachedOutputStream bos = new CachedOutputStream();
        IOUtils.copy(in, bos);
        in.close();
        bos.close();
         
//      out.println(addr);
         
        String data = bos.getOut().toString();      
        out.println(data);
         
        JSONObject json = new JSONObject();
        json.put("data", data);
         
    }
}
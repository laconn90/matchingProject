package controller;

import java.io.IOException;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import model.PersonDAO;
import model.domain.PersonVO;

public class Controller extends HttpServlet {
   protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
      process(request,response);      
   }
   
   protected void process(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
      request.setCharacterEncoding("utf-8");
      String command = request.getParameter("command");
      
      System.out.println("---- " + command);
      
      try{
         if(command.equals("new")){
            signUp(request, response);
         }else if(command.equals("login")){
            loginLogic(request, response);
         }else if(command.equals("sport")) {
            System.out.println("sport 까지온당");
            sport(request, response);
            System.out.println("sport 까지온당2");
         }else if(command.equals("game")) {
            System.out.println("game 까지온당");
            game(request, response);
         }else if(command.equals("culture")) {
            System.out.println("culture 까지온당");
            culture(request, response);
         }else if(command.equals("restraunt")) {
            System.out.println("restraunt 까지온당");
            restraunt(request, response);
         }else if(command.equals("travel")) {
            System.out.println("travel 까지온당");
            travel(request, response);
         }else if(command.equals("study")) {
            System.out.println("study 까지온당");
            study(request, response);
         }else if(command.equals("whenwhere")) {
            System.out.println("whenwhere 까지온당");
            whenwhere(request, response);
         }
      }catch(Exception s){
         request.setAttribute("errorMsg", s.getMessage());
         s.printStackTrace();
      }
      
   }
   public void signUp(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
      String id = request.getParameter("id");
      String pw = request.getParameter("pw");
      
      try {
         PersonDAO.insert(new PersonVO(request.getParameter("id"),request.getParameter("pw"),
               request.getParameter("name"),request.getParameter("gender"),request.getParameter("age")));
         
         //request.setAttribute("name", request.getParameter("name"));
         //request.setAttribute("id", request.getParameter("id"));
         HttpSession session = request.getSession();
         session.setAttribute("id", id);
         session.setAttribute("pw", pw);   

         request.getRequestDispatcher("main/SuccessView.jsp").forward(request, response);
      
      } catch (SQLException e) {
         e.printStackTrace();
         response.sendRedirect("main/failView.jsp");
      }
            
   }
   
   public void loginLogic(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException, SQLException {
      String id = request.getParameter("id");
      String pw = request.getParameter("pw");
      
      HttpSession session = request.getSession();
      session.setAttribute("id", id);
      session.setAttribute("pw", pw);   

      request.getRequestDispatcher("main/LoginCheck.jsp").forward(request, response);
            
   }

   public void sport(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException, SQLException {
      HttpSession session = request.getSession();
      System.out.println("sport method 까지 오나 ");
      String id = (String)session.getAttribute("id");
      String key =request.getParameter("key");
      PersonDAO.insertHobby(new PersonVO(id,request.getParameter("key"),null ,null,null,null,null));
      session.setAttribute("id", id);
      session.setAttribute("key", key);
      /*System.out.println("controller 에까지는 session값 유지되나"+id);
      System.out.println("controller sport 함수에서 key값 오긴오나"+key);*/
      request.getRequestDispatcher("main/whenWhere.jsp").forward(request, response);
   }
   
   public void game(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException, SQLException {
      HttpSession session = request.getSession();
      String id = (String)session.getAttribute("id");
      String key =request.getParameter("key");
      PersonDAO.insertHobby(new PersonVO(id,null ,request.getParameter("key"),null,null,null,null));
      session.setAttribute("id", id);
      session.setAttribute("key", key);
      request.getRequestDispatcher("main/whenWhere.jsp").forward(request, response);
   }
   
   public void culture(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException, SQLException {
      HttpSession session = request.getSession();
      String id = (String)session.getAttribute("id");
      String key =request.getParameter("key");
      PersonDAO.insertHobby(new PersonVO(id,null,null,request.getParameter("key"),null,null,null));
      session.setAttribute("id", id);
      session.setAttribute("key", key);
      request.getRequestDispatcher("main/whenWhere.jsp").forward(request, response);
   }
   
   public void restraunt(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException, SQLException {
      HttpSession session = request.getSession();
      String id = (String)session.getAttribute("id");
      String key =request.getParameter("key");
      PersonDAO.insertHobby(new PersonVO(id,null ,null,null,request.getParameter("key"),null,null));
      session.setAttribute("id", id);
      session.setAttribute("key", key);
      request.getRequestDispatcher("main/whenWhere.jsp").forward(request, response);
   }
   
   public void travel(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException, SQLException {
      HttpSession session = request.getSession();
      String id = (String)session.getAttribute("id");
      String key =request.getParameter("key");
      PersonDAO.insertHobby(new PersonVO(id,null ,null,null,null,request.getParameter("key"),null));
      session.setAttribute("id", id);
      session.setAttribute("key", key);
      request.getRequestDispatcher("main/whenWhere.jsp").forward(request, response);
   }
   
   public void study(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException, SQLException {
      HttpSession session = request.getSession();
      String id = (String)session.getAttribute("id");
      String key =request.getParameter("key");
      PersonDAO.insertHobby(new PersonVO(id,null ,null,null,null,null,request.getParameter("key")));
      session.setAttribute("id", id);
      session.setAttribute("key", key);
      request.getRequestDispatcher("main/whenWhere.jsp").forward(request, response);
   }
   
   public void whenwhere(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
      HttpSession session = request.getSession();
      String id = (String)session.getAttribute("id");
      String key = (String)session.getAttribute("key");
      
      session.setAttribute("id", id);
      session.setAttribute("key",key);
      System.out.println("whenwhere 메소드 까지온당");
      request.getRequestDispatcher("main/random.jsp").forward(request, response);
   }
}
   
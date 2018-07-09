<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
 <%@page import="model.domain.PersonVO"%>
 <%@page import="model.PersonDAO"%> 
 <%@page import="java.util.ArrayList"%>
 <%@page import="java.util.Random" %>
 <%@page import="java.util.HashMap"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<% System.out.println("-----------random.jsp"); %>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://www.w3schools.com/lib/w3-theme-black.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<title>Insert title here</title>
</head>
<body id="myPage">


<!-- Navbar -->
<div class="w3-top">
 <div class="w3-bar w3-theme-d2 w3-left-align">
  <a class="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-hover-white w3-theme-d2" href="javascript:void(0);" onclick="openNav()"><i class="fa fa-bars"></i></a>
  <a href="#" class="w3-bar-item w3-button w3-teal"><i class="fa fa-home w3-margin-right"></i>첫 화면</a>
  <a href="#team" class="w3-bar-item w3-button w3-hide-small w3-hover-white">파트너 선택</a>
  <a href="#work" class="w3-bar-item w3-button w3-hide-small w3-hover-white">매칭 방식</a>
    </div>
  </div>
  <a href="#" class="w3-bar-item w3-button w3-hide-small w3-right w3-hover-teal" title="Search"><i class="fa fa-search"></i></a>
 </div>


<!-- Image Header -->
<div class="w3-display-container w3-animate-opacity">
  <img src="${pageContext.request.contextPath}/images/choice.jpg" alt="boat" style="width:100%;min-height:350px;max-height:600px;">
</div>

<!-- Modal -->
<div id="id01" class="w3-modal">
  <div class="w3-modal-content w3-card-4 w3-animate-top">
    <header class="w3-container w3-teal w3-display-container"> 
      <span onclick="document.getElementById('id01').style.display='none'" class="w3-button w3-teal w3-display-topright"><i class="fa fa-remove"></i></span>
      <h4>Oh snap! We just showed you a modal${pageContext.request.contextPath}</h4>
      <h5>Because we can <i class="fa fa-smile-o"></i></h5>
    </header>
    <div class="w3-container">
      <p>Cool huh? Ok, enough teasing around${pageContext.request.contextPath}</p>
      <p>Go to our <a class="w3-text-teal" href="/w3css/default.asp">W3.CSS Tutorial</a> to learn more!</p>
    </div>
    <footer class="w3-container w3-teal">
      <p>Modal footer</p>
    </footer>
  </div>
</div>

<%
   
   System.out.println("random 까지 온당");
   
   /* int[] rotto = new int[4];  
   Random random = new Random(); 
   for (int i = 0; i < 4; i++) {
        rotto[i] = random.nextInt(10) + 1;
        for(int j=0; j<i; j++){
           if(rotto[i] ==rotto[j]){
           i--;
           break;
           } 
        }
   }
   for(int i=0;i<rotto.length;i++){
      System.out.print(rotto[i]+" ");
   } */
 
   /* System.out.println(session.getAttribute("sport"));
   System.out.println(session.getAttribute("id")); */

   if(session.getAttribute("key").equals("baseball")){
      ArrayList<PersonVO> data = PersonDAO.selecHobbyBaseball();      
      int[] rotto = new int[4];  
      Random random = new Random(); 
      for (int i = 0; i < 4; i++) {
           rotto[i] = random.nextInt(data.size()) + 1;
           for(int j=0; j<i; j++){
              if(rotto[i] ==rotto[j]){
              i--;
              break;
              } 
           }
      }
      for(int i=0;i<rotto.length;i++){
         System.out.print(rotto[i]+" ");
      }
      
      System.out.println("random.jsp baseball 안에서 여기가안되나1 ??");
      data.get(rotto[0]);
      data.get(rotto[0]).getId();
      System.out.println(data.get(rotto[0]).getId());
      System.out.println(data.get(rotto[1]).getId());
      System.out.println(data.get(rotto[2]).getId());
      System.out.println(data.get(rotto[3]).getId());
      System.out.println("random.jsp baseball 안에서 여기가안되나2 ??");
      HashMap<String,String> m1 = new HashMap<String, String>();
      m1.put("one",data.get(rotto[0]).getId() );
      m1.put("two",data.get(rotto[1]).getId());
        m1.put("three",data.get(rotto[2]).getId());
        m1.put("four",data.get(rotto[3]).getId());
        session.setAttribute("data1", m1);   
   } else if(session.getAttribute("key").equals("soccer")){
      ArrayList<PersonVO> data = PersonDAO.selecHobbySoccer();
      System.out.println("soccer random 추출 까지오나 ");
      int[] rotto = new int[4];  
      Random random = new Random(); 
      for (int i = 0; i < 4; i++) {
           rotto[i] = random.nextInt(data.size()) + 1;
           for(int j=0; j<i; j++){
              if(rotto[i] ==rotto[j]){
              i--;
              break;
              } 
           }
      }
      for(int i=0;i<rotto.length;i++){
         System.out.print(rotto[i]+" ");
      }
      System.out.println("soccer random 추출 까지오나2 ");
      System.out.println(data.get(1).getId());
      /* System.out.println(data.get(rotto[0]).getId());
      System.out.println(data.get(rotto[1]).getId());
      System.out.println(data.get(rotto[2]).getId());
      System.out.println(data.get(rotto[3]).getId()); */
      System.out.println("soccer random 추출 까지오나3 ");   
      
      HashMap<String,String> m1 = new HashMap<String, String>();
      m1.put("one",data.get(rotto[0]).getId() );
      m1.put("two",data.get(rotto[1]).getId());
        m1.put("three",data.get(rotto[2]).getId());
        m1.put("four",data.get(rotto[3]).getId());
        session.setAttribute("data1", m1);   
   }else if(session.getAttribute("key").equals("basketball")){
      ArrayList<PersonVO> data = PersonDAO.selecHobbyBasketball();
      /* System.out.println("random jsp 에서 if 문까지 나온당"); */
      
      int[] rotto = new int[4];  
      Random random = new Random(); 
      for (int i = 0; i < 4; i++) {
           rotto[i] = random.nextInt(data.size()) + 1;
           for(int j=0; j<i; j++){
              if(rotto[i] ==rotto[j]){
              i--;
              break;
              } 
           }
      }
      for(int i=0;i<rotto.length;i++){
         System.out.print(rotto[i]+" ");
      }
      
      
      /* System.out.println(data.get(rotto[0]).getId());
      System.out.println(data.get(rotto[1]).getId());
      System.out.println(data.get(rotto[2]).getId());
      System.out.println(data.get(rotto[3]).getId());
       */
      HashMap<String,String> m1 = new HashMap<String, String>();
      m1.put("one",data.get(rotto[0]).getId() );
      m1.put("two",data.get(rotto[1]).getId());
        m1.put("three",data.get(rotto[2]).getId());
        m1.put("four",data.get(rotto[3]).getId());
        session.setAttribute("data1", m1);   
   }else if(session.getAttribute("key").equals("lol")){
      ArrayList<PersonVO> data = PersonDAO.selecHobbyLol();
      /* System.out.println("random jsp 에서 if 문까지 나온당"); */
      
      int[] rotto = new int[4];  
      Random random = new Random(); 
      for (int i = 0; i < 4; i++) {
           rotto[i] = random.nextInt(data.size()) + 1;
           for(int j=0; j<i; j++){
              if(rotto[i] ==rotto[j]){
              i--;
              break;
              } 
           }
      }
      for(int i=0;i<rotto.length;i++){
         System.out.print(rotto[i]+" ");
      }
      
      
      /* System.out.println(data.get(rotto[0]).getId());
      System.out.println(data.get(rotto[1]).getId());
      System.out.println(data.get(rotto[2]).getId());
      System.out.println(data.get(rotto[3]).getId());
       */
      HashMap<String,String> m1 = new HashMap<String, String>();
      m1.put("one",data.get(rotto[0]).getId() );
      m1.put("two",data.get(rotto[1]).getId());
        m1.put("three",data.get(rotto[2]).getId());
        m1.put("four",data.get(rotto[3]).getId());
        session.setAttribute("data1", m1);   
   }else if(session.getAttribute("key").equals("battleground")){
      ArrayList<PersonVO> data = PersonDAO.selecHobbyBattleground();
      /* System.out.println("random jsp 에서 if 문까지 나온당"); */
      
      int[] rotto = new int[4];  
      Random random = new Random(); 
      for (int i = 0; i < 4; i++) {
           rotto[i] = random.nextInt(data.size()) + 1;
           for(int j=0; j<i; j++){
              if(rotto[i] ==rotto[j]){
              i--;
              break;
              } 
           }
      }
      for(int i=0;i<rotto.length;i++){
         System.out.print(rotto[i]+" ");
      }
      
      
      /* System.out.println(data.get(rotto[0]).getId());
      System.out.println(data.get(rotto[1]).getId());
      System.out.println(data.get(rotto[2]).getId());
      System.out.println(data.get(rotto[3]).getId());
       */
      HashMap<String,String> m1 = new HashMap<String, String>();
      m1.put("one",data.get(rotto[0]).getId() );
      m1.put("two",data.get(rotto[1]).getId());
        m1.put("three",data.get(rotto[2]).getId());
        m1.put("four",data.get(rotto[3]).getId());
        session.setAttribute("data1", m1);   
   }else if(session.getAttribute("key").equals("overwatch")){
      ArrayList<PersonVO> data = PersonDAO.selecHobbyoverwatch();
      /* System.out.println("random jsp 에서 if 문까지 나온당"); */
      
      int[] rotto = new int[4];  
      Random random = new Random(); 
      for (int i = 0; i < 4; i++) {
           rotto[i] = random.nextInt(data.size()) + 1;
           for(int j=0; j<i; j++){
              if(rotto[i] ==rotto[j]){
              i--;
              break;
              } 
           }
      }
      for(int i=0;i<rotto.length;i++){
         System.out.print(rotto[i]+" ");
      }
      
      
      /* System.out.println(data.get(rotto[0]).getId());
      System.out.println(data.get(rotto[1]).getId());
      System.out.println(data.get(rotto[2]).getId());
      System.out.println(data.get(rotto[3]).getId());
       */
      HashMap<String,String> m1 = new HashMap<String, String>();
      m1.put("one",data.get(rotto[0]).getId() );
      m1.put("two",data.get(rotto[1]).getId());
        m1.put("three",data.get(rotto[2]).getId());
        m1.put("four",data.get(rotto[3]).getId());
        session.setAttribute("data1", m1);   
   }else if(session.getAttribute("key").equals("movie")){
      ArrayList<PersonVO> data = PersonDAO.selecHobbymovie();
      /* System.out.println("random jsp 에서 if 문까지 나온당"); */
      
      int[] rotto = new int[4];  
      Random random = new Random(); 
      for (int i = 0; i < 4; i++) {
           rotto[i] = random.nextInt(data.size()) + 1;
           for(int j=0; j<i; j++){
              if(rotto[i] ==rotto[j]){
              i--;
              break;
              } 
           }
      }
      for(int i=0;i<rotto.length;i++){
         System.out.print(rotto[i]+" ");
      }
      
      
      /* System.out.println(data.get(rotto[0]).getId());
      System.out.println(data.get(rotto[1]).getId());
      System.out.println(data.get(rotto[2]).getId());
      System.out.println(data.get(rotto[3]).getId());
       */
      HashMap<String,String> m1 = new HashMap<String, String>();
      m1.put("one",data.get(rotto[0]).getId() );
      m1.put("two",data.get(rotto[1]).getId());
        m1.put("three",data.get(rotto[2]).getId());
        m1.put("four",data.get(rotto[3]).getId());
        session.setAttribute("data1", m1);   
   }else if(session.getAttribute("key").equals("musical")){
      ArrayList<PersonVO> data = PersonDAO.selecHobbymusical();
      /* System.out.println("random jsp 에서 if 문까지 나온당"); */
      
      int[] rotto = new int[4];  
      Random random = new Random(); 
      for (int i = 0; i < 4; i++) {
           rotto[i] = random.nextInt(data.size()) + 1;
           for(int j=0; j<i; j++){
              if(rotto[i] ==rotto[j]){
              i--;
              break;
              } 
           }
      }
      for(int i=0;i<rotto.length;i++){
         System.out.print(rotto[i]+" ");
      }
      
      
      /* System.out.println(data.get(rotto[0]).getId());
      System.out.println(data.get(rotto[1]).getId());
      System.out.println(data.get(rotto[2]).getId());
      System.out.println(data.get(rotto[3]).getId());
       */
      HashMap<String,String> m1 = new HashMap<String, String>();
      m1.put("one",data.get(rotto[0]).getId() );
      m1.put("two",data.get(rotto[1]).getId());
        m1.put("three",data.get(rotto[2]).getId());
        m1.put("four",data.get(rotto[3]).getId());
        session.setAttribute("data1", m1);   
   }else if(session.getAttribute("key").equals("theater")){
      ArrayList<PersonVO> data = PersonDAO.selecHobbytheater();
      /* System.out.println("random jsp 에서 if 문까지 나온당"); */
      
      int[] rotto = new int[4];  
      Random random = new Random(); 
      for (int i = 0; i < 4; i++) {
           rotto[i] = random.nextInt(data.size()) + 1;
           for(int j=0; j<i; j++){
              if(rotto[i] ==rotto[j]){
              i--;
              break;
              } 
           }
      }
      for(int i=0;i<rotto.length;i++){
         System.out.print(rotto[i]+" ");
      }
      
      
      /* System.out.println(data.get(rotto[0]).getId());
      System.out.println(data.get(rotto[1]).getId());
      System.out.println(data.get(rotto[2]).getId());
      System.out.println(data.get(rotto[3]).getId());
       */
      HashMap<String,String> m1 = new HashMap<String, String>();
      m1.put("one",data.get(rotto[0]).getId() );
      m1.put("two",data.get(rotto[1]).getId());
        m1.put("three",data.get(rotto[2]).getId());
        m1.put("four",data.get(rotto[3]).getId());
        session.setAttribute("data1", m1);   
   }else if(session.getAttribute("key").equals("chicken")){
      ArrayList<PersonVO> data = PersonDAO.selecHobbychicken();
      /* System.out.println("random jsp 에서 if 문까지 나온당"); */
      
      int[] rotto = new int[4];  
      Random random = new Random(); 
      for (int i = 0; i < 4; i++) {
           rotto[i] = random.nextInt(data.size()) + 1;
           for(int j=0; j<i; j++){
              if(rotto[i] ==rotto[j]){
              i--;
              break;
              } 
           }
      }
      for(int i=0;i<rotto.length;i++){
         System.out.print(rotto[i]+" ");
      }
      
      
      /* System.out.println(data.get(rotto[0]).getId());
      System.out.println(data.get(rotto[1]).getId());
      System.out.println(data.get(rotto[2]).getId());
      System.out.println(data.get(rotto[3]).getId());
       */
      HashMap<String,String> m1 = new HashMap<String, String>();
      m1.put("one",data.get(rotto[0]).getId() );
      m1.put("two",data.get(rotto[1]).getId());
        m1.put("three",data.get(rotto[2]).getId());
        m1.put("four",data.get(rotto[3]).getId());
        session.setAttribute("data1", m1);   
   }else if(session.getAttribute("key").equals("steak")){
      ArrayList<PersonVO> data = PersonDAO.selecHobbysteak();
      /* System.out.println("random jsp 에서 if 문까지 나온당"); */
      
      int[] rotto = new int[4];  
      Random random = new Random(); 
      for (int i = 0; i < 4; i++) {
           rotto[i] = random.nextInt(data.size()) + 1;
           for(int j=0; j<i; j++){
              if(rotto[i] ==rotto[j]){
              i--;
              break;
              } 
           }
      }
      for(int i=0;i<rotto.length;i++){
         System.out.print(rotto[i]+" ");
      }
      
      
      /* System.out.println(data.get(rotto[0]).getId());
      System.out.println(data.get(rotto[1]).getId());
      System.out.println(data.get(rotto[2]).getId());
      System.out.println(data.get(rotto[3]).getId());
       */
      HashMap<String,String> m1 = new HashMap<String, String>();
      m1.put("one",data.get(rotto[0]).getId() );
      m1.put("two",data.get(rotto[1]).getId());
        m1.put("three",data.get(rotto[2]).getId());
        m1.put("four",data.get(rotto[3]).getId());
        session.setAttribute("data1", m1);   
   }else if(session.getAttribute("key").equals("giblet")){
      ArrayList<PersonVO> data = PersonDAO.selecHobbygiblet();
      /* System.out.println("random jsp 에서 if 문까지 나온당"); */
      
      int[] rotto = new int[4];  
      Random random = new Random(); 
      for (int i = 0; i < 4; i++) {
           rotto[i] = random.nextInt(data.size()) + 1;
           for(int j=0; j<i; j++){
              if(rotto[i] ==rotto[j]){
              i--;
              break;
              } 
           }
      }
      for(int i=0;i<rotto.length;i++){
         System.out.print(rotto[i]+" ");
      }
      
      
      /* System.out.println(data.get(rotto[0]).getId());
      System.out.println(data.get(rotto[1]).getId());
      System.out.println(data.get(rotto[2]).getId());
      System.out.println(data.get(rotto[3]).getId());
       */
      HashMap<String,String> m1 = new HashMap<String, String>();
      m1.put("one",data.get(rotto[0]).getId() );
      m1.put("two",data.get(rotto[1]).getId());
        m1.put("three",data.get(rotto[2]).getId());
        m1.put("four",data.get(rotto[3]).getId());
        session.setAttribute("data1", m1);   
   }else if(session.getAttribute("key").equals("italian")){
      ArrayList<PersonVO> data = PersonDAO.selecHobbyitalian();
      /* System.out.println("random jsp 에서 if 문까지 나온당"); */
      
      int[] rotto = new int[4];  
      Random random = new Random(); 
      for (int i = 0; i < 4; i++) {
           rotto[i] = random.nextInt(data.size()) + 1;
           for(int j=0; j<i; j++){
              if(rotto[i] ==rotto[j]){
              i--;
              break;
              } 
           }
      }
      for(int i=0;i<rotto.length;i++){
         System.out.print(rotto[i]+" ");
      }
      
      
      /* System.out.println(data.get(rotto[0]).getId());
      System.out.println(data.get(rotto[1]).getId());
      System.out.println(data.get(rotto[2]).getId());
      System.out.println(data.get(rotto[3]).getId());
       */
      HashMap<String,String> m1 = new HashMap<String, String>();
      m1.put("one",data.get(rotto[0]).getId() );
      m1.put("two",data.get(rotto[1]).getId());
        m1.put("three",data.get(rotto[2]).getId());
        m1.put("four",data.get(rotto[3]).getId());
        session.setAttribute("data1", m1);   
   }else if(session.getAttribute("key").equals("seafood")){
      ArrayList<PersonVO> data = PersonDAO.selecHobbyseafood();
      /* System.out.println("random jsp 에서 if 문까지 나온당"); */
      
      int[] rotto = new int[4];  
      Random random = new Random(); 
      for (int i = 0; i < 4; i++) {
           rotto[i] = random.nextInt(data.size()) + 1;
           for(int j=0; j<i; j++){
              if(rotto[i] ==rotto[j]){
              i--;
              break;
              } 
           }
      }
      for(int i=0;i<rotto.length;i++){
         System.out.print(rotto[i]+" ");
      }
      
      
      /* System.out.println(data.get(rotto[0]).getId());
      System.out.println(data.get(rotto[1]).getId());
      System.out.println(data.get(rotto[2]).getId());
      System.out.println(data.get(rotto[3]).getId());
       */
      HashMap<String,String> m1 = new HashMap<String, String>();
      m1.put("one",data.get(rotto[0]).getId() );
      m1.put("two",data.get(rotto[1]).getId());
        m1.put("three",data.get(rotto[2]).getId());
        m1.put("four",data.get(rotto[3]).getId());
        session.setAttribute("data1", m1);   
   }else if(session.getAttribute("key").equals("busan")){
      ArrayList<PersonVO> data = PersonDAO.selecHobbybusan();
      /* System.out.println("random jsp 에서 if 문까지 나온당"); */
      
      int[] rotto = new int[4];  
      Random random = new Random(); 
      for (int i = 0; i < 4; i++) {
           rotto[i] = random.nextInt(data.size()) + 1;
           for(int j=0; j<i; j++){
              if(rotto[i] ==rotto[j]){
              i--;
              break;
              } 
           }
      }
      for(int i=0;i<rotto.length;i++){
         System.out.print(rotto[i]+" ");
      }
      
      
      /* System.out.println(data.get(rotto[0]).getId());
      System.out.println(data.get(rotto[1]).getId());
      System.out.println(data.get(rotto[2]).getId());
      System.out.println(data.get(rotto[3]).getId());
       */
      HashMap<String,String> m1 = new HashMap<String, String>();
      m1.put("one",data.get(rotto[0]).getId() );
      m1.put("two",data.get(rotto[1]).getId());
        m1.put("three",data.get(rotto[2]).getId());
        m1.put("four",data.get(rotto[3]).getId());
        session.setAttribute("data1", m1);   
   }else if(session.getAttribute("key").equals("gyeongju")){
      ArrayList<PersonVO> data = PersonDAO.selecHobbygyeongju();
      /* System.out.println("random jsp 에서 if 문까지 나온당"); */
      
      int[] rotto = new int[4];  
      Random random = new Random(); 
      for (int i = 0; i < 4; i++) {
           rotto[i] = random.nextInt(data.size()) + 1;
           for(int j=0; j<i; j++){
              if(rotto[i] ==rotto[j]){
              i--;
              break;
              } 
           }
      }
      for(int i=0;i<rotto.length;i++){
         System.out.print(rotto[i]+" ");
      }
      
      
      /* System.out.println(data.get(rotto[0]).getId());
      System.out.println(data.get(rotto[1]).getId());
      System.out.println(data.get(rotto[2]).getId());
      System.out.println(data.get(rotto[3]).getId());
       */
      HashMap<String,String> m1 = new HashMap<String, String>();
      m1.put("one",data.get(rotto[0]).getId() );
      m1.put("two",data.get(rotto[1]).getId());
        m1.put("three",data.get(rotto[2]).getId());
        m1.put("four",data.get(rotto[3]).getId());
        session.setAttribute("data1", m1);   
   }else if(session.getAttribute("key").equals("jeju")){
      ArrayList<PersonVO> data = PersonDAO.selecHobbyjeju();
      /* System.out.println("random jsp 에서 if 문까지 나온당"); */
      
      int[] rotto = new int[4];  
      Random random = new Random(); 
      for (int i = 0; i < 4; i++) {
           rotto[i] = random.nextInt(data.size()) + 1;
           for(int j=0; j<i; j++){
              if(rotto[i] ==rotto[j]){
              i--;
              break;
              } 
           }
      }
      for(int i=0;i<rotto.length;i++){
         System.out.print(rotto[i]+" ");
      }
      
      
      /* System.out.println(data.get(rotto[0]).getId());
      System.out.println(data.get(rotto[1]).getId());
      System.out.println(data.get(rotto[2]).getId());
      System.out.println(data.get(rotto[3]).getId());
       */
      HashMap<String,String> m1 = new HashMap<String, String>();
      m1.put("one",data.get(rotto[0]).getId() );
      m1.put("two",data.get(rotto[1]).getId());
        m1.put("three",data.get(rotto[2]).getId());
        m1.put("four",data.get(rotto[3]).getId());
        session.setAttribute("data1", m1);   
   }else if(session.getAttribute("key").equals("gangreung")){
      ArrayList<PersonVO> data = PersonDAO.selecHobbygangreung();
      /* System.out.println("random jsp 에서 if 문까지 나온당"); */
      
      int[] rotto = new int[4];  
      Random random = new Random(); 
      for (int i = 0; i < 4; i++) {
           rotto[i] = random.nextInt(data.size()) + 1;
           for(int j=0; j<i; j++){
              if(rotto[i] ==rotto[j]){
              i--;
              break;
              } 
           }
      }
      for(int i=0;i<rotto.length;i++){
         System.out.print(rotto[i]+" ");
      }
      
      
      /* System.out.println(data.get(rotto[0]).getId());
      System.out.println(data.get(rotto[1]).getId());
      System.out.println(data.get(rotto[2]).getId());
      System.out.println(data.get(rotto[3]).getId());
       */
      HashMap<String,String> m1 = new HashMap<String, String>();
      m1.put("one",data.get(rotto[0]).getId() );
      m1.put("two",data.get(rotto[1]).getId());
        m1.put("three",data.get(rotto[2]).getId());
        m1.put("four",data.get(rotto[3]).getId());
        session.setAttribute("data1", m1);   
   }else if(session.getAttribute("key").equals("jeonju")){
      ArrayList<PersonVO> data = PersonDAO.selecHobbyjeonju();
      /* System.out.println("random jsp 에서 if 문까지 나온당"); */
      
      int[] rotto = new int[4];  
      Random random = new Random(); 
      for (int i = 0; i < 4; i++) {
           rotto[i] = random.nextInt(data.size()) + 1;
           for(int j=0; j<i; j++){
              if(rotto[i] ==rotto[j]){
              i--;
              break;
              } 
           }
      }
      for(int i=0;i<rotto.length;i++){
         System.out.print(rotto[i]+" ");
      }
      
      
      /* System.out.println(data.get(rotto[0]).getId());
      System.out.println(data.get(rotto[1]).getId());
      System.out.println(data.get(rotto[2]).getId());
      System.out.println(data.get(rotto[3]).getId());
       */
      HashMap<String,String> m1 = new HashMap<String, String>();
      m1.put("one",data.get(rotto[0]).getId() );
      m1.put("two",data.get(rotto[1]).getId());
        m1.put("three",data.get(rotto[2]).getId());
        m1.put("four",data.get(rotto[3]).getId());
        session.setAttribute("data1", m1);   
   }else if(session.getAttribute("key").equals("english")){
      ArrayList<PersonVO> data = PersonDAO.selecHobbyenglish();
      /* System.out.println("random jsp 에서 if 문까지 나온당"); */
      
      int[] rotto = new int[4];  
      Random random = new Random(); 
      for (int i = 0; i < 4; i++) {
           rotto[i] = random.nextInt(data.size()) + 1;
           for(int j=0; j<i; j++){
              if(rotto[i] ==rotto[j]){
              i--;
              break;
              } 
           }
      }
      for(int i=0;i<rotto.length;i++){
         System.out.print(rotto[i]+" ");
      }
      
      
      /* System.out.println(data.get(rotto[0]).getId());
      System.out.println(data.get(rotto[1]).getId());
      System.out.println(data.get(rotto[2]).getId());
      System.out.println(data.get(rotto[3]).getId());
       */
      HashMap<String,String> m1 = new HashMap<String, String>();
      m1.put("one",data.get(rotto[0]).getId() );
      m1.put("two",data.get(rotto[1]).getId());
        m1.put("three",data.get(rotto[2]).getId());
        m1.put("four",data.get(rotto[3]).getId());
        session.setAttribute("data1", m1);   
   }else if(session.getAttribute("key").equals("computer")){
      ArrayList<PersonVO> data = PersonDAO.selecHobbycomputer();
      /* System.out.println("random jsp 에서 if 문까지 나온당"); */
      
      int[] rotto = new int[4];  
      Random random = new Random(); 
      for (int i = 0; i < 4; i++) {
           rotto[i] = random.nextInt(data.size()) + 1;
           for(int j=0; j<i; j++){
              if(rotto[i] ==rotto[j]){
              i--;
              break;
              } 
           }
      }
      for(int i=0;i<rotto.length;i++){
         System.out.print(rotto[i]+" ");
      }
      
      
      /* System.out.println(data.get(rotto[0]).getId());
      System.out.println(data.get(rotto[1]).getId());
      System.out.println(data.get(rotto[2]).getId());
      System.out.println(data.get(rotto[3]).getId());
       */
      HashMap<String,String> m1 = new HashMap<String, String>();
      m1.put("one",data.get(rotto[0]).getId() );
      m1.put("two",data.get(rotto[1]).getId());
        m1.put("three",data.get(rotto[2]).getId());
        m1.put("four",data.get(rotto[3]).getId());
        session.setAttribute("data1", m1);   
   }else if(session.getAttribute("key").equals("read")){
      ArrayList<PersonVO> data = PersonDAO.selecHobbyread();
      /* System.out.println("random jsp 에서 if 문까지 나온당"); */
      
      int[] rotto = new int[4];  
      Random random = new Random(); 
      for (int i = 0; i < 4; i++) {
           rotto[i] = random.nextInt(data.size()) + 1;
           for(int j=0; j<i; j++){
              if(rotto[i] ==rotto[j]){
              i--;
              break;
              } 
           }
      }
      for(int i=0;i<rotto.length;i++){
         System.out.print(rotto[i]+" ");
      }
      
      
      /* System.out.println(data.get(rotto[0]).getId());
      System.out.println(data.get(rotto[1]).getId());
      System.out.println(data.get(rotto[2]).getId());
      System.out.println(data.get(rotto[3]).getId());
       */
      HashMap<String,String> m1 = new HashMap<String, String>();
      m1.put("one",data.get(rotto[0]).getId() );
      m1.put("two",data.get(rotto[1]).getId());
        m1.put("three",data.get(rotto[2]).getId());
        m1.put("four",data.get(rotto[3]).getId());
        session.setAttribute("data1", m1);   
   }else if(session.getAttribute("key").equals("job")){
      ArrayList<PersonVO> data = PersonDAO.selecHobbyjob();
      /* System.out.println("random jsp 에서 if 문까지 나온당"); */
      
      int[] rotto = new int[4];  
      Random random = new Random(); 
      for (int i = 0; i < 4; i++) {
           rotto[i] = random.nextInt(data.size()) + 1;
           for(int j=0; j<i; j++){
              if(rotto[i] ==rotto[j]){
              i--;
              break;
              } 
           }
      }
      for(int i=0;i<rotto.length;i++){
         System.out.print(rotto[i]+" ");
      }
      
      
      /* System.out.println(data.get(rotto[0]).getId());
      System.out.println(data.get(rotto[1]).getId());
      System.out.println(data.get(rotto[2]).getId());
      System.out.println(data.get(rotto[3]).getId());
       */
      HashMap<String,String> m1 = new HashMap<String, String>();
      m1.put("one",data.get(rotto[0]).getId() );
      m1.put("two",data.get(rotto[1]).getId());
        m1.put("three",data.get(rotto[2]).getId());
        m1.put("four",data.get(rotto[3]).getId());
        session.setAttribute("data1", m1);   
   }

%>

<!-- Team Container -->
<div class="w3-container w3-padding-64 w3-center" id="team">
<h2><font color="coral" size="9">[ 파트너 선택 ]</font></h2>
<p>취미를 함께하고 싶은 파트너를 선택해주세요</p>
<a href="javascript:history.go(0)"><font size="5" color="red">파트너 교체</font></a>

<div class="w3-row"><br>

<div class="w3-quarter">
  <a href="main/festival.html"><img src="${pageContext.request.contextPath}/images/choice2.jpg" alt="Boss" style="width:45%; height:45%;" class="w3-circle w3-hover-opacity"></a>
  <h3>${sessionScope.data1.one}</h3>
  
</div>

<div class="w3-quarter">
  <a href="main/festival.html"><img src="${pageContext.request.contextPath}/images/choice3.jpg" alt="Boss" style="width:45%; height:45%;" class="w3-circle w3-hover-opacity"></a>
  <h3>${sessionScope.data1.two}</h3>

</div>

<div class="w3-quarter">
  <a href="main/festival.html"><img src="${pageContext.request.contextPath}/images/choice4.jpg" alt="Boss" style="width:45%; height:45%;" class="w3-circle w3-hover-opacity"></a>
  <h3>${sessionScope.data1.three}</h3>

</div>

<div class="w3-quarter">
  <a href="main/festival.html"><img src="${pageContext.request.contextPath}/images/choice5.jpg" alt="Boss" style="width:45%; height:45%;" class="w3-circle w3-hover-opacity"></a>
  <h3>${sessionScope.data1.four}</h3>
</div>

</div>
</div>

<!-- Work Row -->
<div class="w3-row-padding w3-padding-64 w3-theme-l1" id="work">

<div class="w3-quarter">
<h2><font size="7" color="coral">매칭 방식</font></h2>
<p><font size="5">1. 철저한 검증과 신뢰를 바탕으로 매칭이 이루어집니다.<br>
            2. 약속 일정을 어길시에 페널티가 적용됩니다.<br>
            3. 귀하의 잘못으로 일어난 불미스러운 사건은 당사가 책임지지 않습니다.
</font></p>
</div>

<div class="w3-quarter">
<div class="w3-card w3-white">
  <img src="${pageContext.request.contextPath}/images/choice10.jpg" alt="Vernazza" style="width:100%">
  <div class="w3-container">
  <h3><font color="red">1 단계</font></h3>
  <h4>선택</h4>
  <p>취미를 함께하고 싶은 파트너를 정해주세요.</p>
  <p>선택하시면 상대방에게 요청이 갑니다.</p>
  </div>
  </div>
</div>

<div class="w3-quarter">
<div class="w3-card w3-white">
  <img src="${pageContext.request.contextPath}/images/choice11.png" alt="Cinque Terre" style="width:100%">
  <div class="w3-container">
  <h3><font color="red">2 단계</font></h3>
  <h4>요청 응답 기다림</h4>
  <p>상대방이 요청을 확인합니다.</p>
  <p>고객님의 프로필을 확인하고 수락여부를 결정합니다.</p>
  </div>
  </div>
</div>

<div class="w3-quarter">
<div class="w3-card w3-white">
  <img src="${pageContext.request.contextPath}/images/choice12.png" alt="Monterosso" style="width:100%">
  <div class="w3-container">
  <h3><font color="red">3 단계</font></h3>
  <h4>함께 취미 즐기기</h4>
  <p>상대방이 요청을 수락하면 매칭이 성사됩니다.</p>
  <p>함께 장소를 정해 취미를 재밌게 즐겨주세요</p>
  </div>
  </div>
</div>

</div>

</body>
</html>
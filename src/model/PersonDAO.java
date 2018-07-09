package model;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import model.domain.PersonVO;
import oracle.net.aso.a;
import util.DBUtil;

public class PersonDAO {
	public static ArrayList<PersonVO> selectIdPw() throws SQLException {
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rset = null;
		ArrayList<PersonVO> all = null;
		
		try {
			con = DBUtil.getConnection();
			pstmt = con.prepareStatement("select ID, PW, NAME from person");
			rset = pstmt.executeQuery();

			all = new ArrayList<PersonVO>();
			while (rset.next()) {
				all.add(new PersonVO(rset.getString(1), rset.getString(2), rset.getString(3)));
			}
		} finally {
			DBUtil.close(con, pstmt);
		}
		return all;
	}
	
	
	
	public static ArrayList<PersonVO> selecHobbyBaseball() throws SQLException {
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rset = null;
		ArrayList<PersonVO> all = null;
		
		try {
			con = DBUtil.getConnection();
			pstmt = con.prepareStatement("select id from hobby where sport='baseball' ");
			rset = pstmt.executeQuery();

			all = new ArrayList<PersonVO>();
			while (rset.next()) {
				all.add(new PersonVO(rset.getString(1)));
			}
		} finally {
			DBUtil.close(con, pstmt);
		}
		return all;
	}
	
	public static ArrayList<PersonVO> selecHobbySoccer() throws SQLException {
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rset = null;
		ArrayList<PersonVO> all = null;
		
		try {
			con = DBUtil.getConnection();
			pstmt = con.prepareStatement("select id from hobby where sport='soccer' ");
			rset = pstmt.executeQuery();

			all = new ArrayList<PersonVO>();
			while (rset.next()) {
				all.add(new PersonVO(rset.getString(1)));
			}
		} finally {
			DBUtil.close(con, pstmt);
		}
		return all;
	}
	
	public static ArrayList<PersonVO> selecHobbyBasketball() throws SQLException {
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rset = null;
		ArrayList<PersonVO> all = null;
		
		try {
			con = DBUtil.getConnection();
			pstmt = con.prepareStatement("select id from hobby where sport='basketball' ");
			rset = pstmt.executeQuery();

			all = new ArrayList<PersonVO>();
			while (rset.next()) {
				all.add(new PersonVO(rset.getString(1)));
			}
		} finally {
			DBUtil.close(con, pstmt);
		}
		return all;
	}
	
	
	public static ArrayList<PersonVO> selecHobbyLol() throws SQLException {
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rset = null;
		ArrayList<PersonVO> all = null;
		
		try {
			con = DBUtil.getConnection();
			pstmt = con.prepareStatement("select id from hobby where game='lol' ");
			rset = pstmt.executeQuery();

			all = new ArrayList<PersonVO>();
			while (rset.next()) {
				all.add(new PersonVO(rset.getString(1)));
			}
		} finally {
			DBUtil.close(con, pstmt);
		}
		return all;
	}
	
	public static ArrayList<PersonVO> selecHobbyBattleground() throws SQLException {
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rset = null;
		ArrayList<PersonVO> all = null;
		
		try {
			con = DBUtil.getConnection();
			pstmt = con.prepareStatement("select id from hobby where game='battleground' ");
			rset = pstmt.executeQuery();

			all = new ArrayList<PersonVO>();
			while (rset.next()) {
				all.add(new PersonVO(rset.getString(1)));
			}
		} finally {
			DBUtil.close(con, pstmt);
		}
		return all;
	}
	
	public static ArrayList<PersonVO> selecHobbyoverwatch() throws SQLException {
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rset = null;
		ArrayList<PersonVO> all = null;
		
		try {
			con = DBUtil.getConnection();
			pstmt = con.prepareStatement("select id from hobby where game='overwatch' ");
			rset = pstmt.executeQuery();

			all = new ArrayList<PersonVO>();
			while (rset.next()) {
				all.add(new PersonVO(rset.getString(1)));
			}
		} finally {
			DBUtil.close(con, pstmt);
		}
		return all;
	}
	

	public static ArrayList<PersonVO> selecHobbymovie() throws SQLException {
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rset = null;
		ArrayList<PersonVO> all = null;
		
		try {
			con = DBUtil.getConnection();
			pstmt = con.prepareStatement("select id from hobby where culture='movie' ");
			rset = pstmt.executeQuery();

			all = new ArrayList<PersonVO>();
			while (rset.next()) {
				all.add(new PersonVO(rset.getString(1)));
			}
		} finally {
			DBUtil.close(con, pstmt);
		}
		return all;
	}
	
	public static ArrayList<PersonVO> selecHobbymusical() throws SQLException {
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rset = null;
		ArrayList<PersonVO> all = null;
		
		try {
			con = DBUtil.getConnection();
			pstmt = con.prepareStatement("select id from hobby where culture='musical' ");
			rset = pstmt.executeQuery();

			all = new ArrayList<PersonVO>();
			while (rset.next()) {
				all.add(new PersonVO(rset.getString(1)));
			}
		} finally {
			DBUtil.close(con, pstmt);
		}
		return all;
	}
	
	
	public static ArrayList<PersonVO> selecHobbytheater() throws SQLException {
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rset = null;
		ArrayList<PersonVO> all = null;
		
		try {
			con = DBUtil.getConnection();
			pstmt = con.prepareStatement("select id from hobby where culture='theater' ");
			rset = pstmt.executeQuery();

			all = new ArrayList<PersonVO>();
			while (rset.next()) {
				all.add(new PersonVO(rset.getString(1)));
			}
		} finally {
			DBUtil.close(con, pstmt);
		}
		return all;
	}
	
	public static ArrayList<PersonVO> selecHobbychicken() throws SQLException {
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rset = null;
		ArrayList<PersonVO> all = null;
		
		try {
			con = DBUtil.getConnection();
			pstmt = con.prepareStatement("select id from hobby where restraunt='chicken' ");
			rset = pstmt.executeQuery();

			all = new ArrayList<PersonVO>();
			while (rset.next()) {
				all.add(new PersonVO(rset.getString(1)));
			}
		} finally {
			DBUtil.close(con, pstmt);
		}
		return all;
	}

	public static ArrayList<PersonVO> selecHobbysteak() throws SQLException {
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rset = null;
		ArrayList<PersonVO> all = null;
		
		try {
			con = DBUtil.getConnection();
			pstmt = con.prepareStatement("select id from hobby where restraunt='steak' ");
			rset = pstmt.executeQuery();

			all = new ArrayList<PersonVO>();
			while (rset.next()) {
				all.add(new PersonVO(rset.getString(1)));
			}
		} finally {
			DBUtil.close(con, pstmt);
		}
		return all;
	}
	
	public static ArrayList<PersonVO> selecHobbygiblet() throws SQLException {
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rset = null;
		ArrayList<PersonVO> all = null;
		
		try {
			con = DBUtil.getConnection();
			pstmt = con.prepareStatement("select id from hobby where restraunt='giblet' ");
			rset = pstmt.executeQuery();

			all = new ArrayList<PersonVO>();
			while (rset.next()) {
				all.add(new PersonVO(rset.getString(1)));
			}
		} finally {
			DBUtil.close(con, pstmt);
		}
		return all;
	}
	
	public static ArrayList<PersonVO> selecHobbyitalian() throws SQLException {
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rset = null;
		ArrayList<PersonVO> all = null;
		
		try {
			con = DBUtil.getConnection();
			pstmt = con.prepareStatement("select id from hobby where restraunt='italian' ");
			rset = pstmt.executeQuery();

			all = new ArrayList<PersonVO>();
			while (rset.next()) {
				all.add(new PersonVO(rset.getString(1)));
			}
		} finally {
			DBUtil.close(con, pstmt);
		}
		return all;
	}
	
	public static ArrayList<PersonVO> selecHobbyseafood() throws SQLException {
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rset = null;
		ArrayList<PersonVO> all = null;
		
		try {
			con = DBUtil.getConnection();
			pstmt = con.prepareStatement("select id from hobby where restraunt='seafood' ");
			rset = pstmt.executeQuery();

			all = new ArrayList<PersonVO>();
			while (rset.next()) {
				all.add(new PersonVO(rset.getString(1)));
			}
		} finally {
			DBUtil.close(con, pstmt);
		}
		return all;
	}
	
	
	public static ArrayList<PersonVO> selecHobbybusan() throws SQLException {
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rset = null;
		ArrayList<PersonVO> all = null;
		
		try {
			con = DBUtil.getConnection();
			pstmt = con.prepareStatement("select id from hobby where travel='busan' ");
			rset = pstmt.executeQuery();

			all = new ArrayList<PersonVO>();
			while (rset.next()) {
				all.add(new PersonVO(rset.getString(1)));
			}
		} finally {
			DBUtil.close(con, pstmt);
		}
		return all;
	}
	
	public static ArrayList<PersonVO> selecHobbygyeongju() throws SQLException {
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rset = null;
		ArrayList<PersonVO> all = null;
		
		try {
			con = DBUtil.getConnection();
			pstmt = con.prepareStatement("select id from hobby where travel='gyeongju' ");
			rset = pstmt.executeQuery();

			all = new ArrayList<PersonVO>();
			while (rset.next()) {
				all.add(new PersonVO(rset.getString(1)));
			}
		} finally {
			DBUtil.close(con, pstmt);
		}
		return all;
	}
	
	public static ArrayList<PersonVO> selecHobbyjeju() throws SQLException {
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rset = null;
		ArrayList<PersonVO> all = null;
		
		try {
			con = DBUtil.getConnection();
			pstmt = con.prepareStatement("select id from hobby where travel='jeju' ");
			rset = pstmt.executeQuery();

			all = new ArrayList<PersonVO>();
			while (rset.next()) {
				all.add(new PersonVO(rset.getString(1)));
			}
		} finally {
			DBUtil.close(con, pstmt);
		}
		return all;
	}
	
	public static ArrayList<PersonVO> selecHobbygangreung() throws SQLException {
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rset = null;
		ArrayList<PersonVO> all = null;
		
		try {
			con = DBUtil.getConnection();
			pstmt = con.prepareStatement("select id from hobby where travel='gangreung' ");
			rset = pstmt.executeQuery();

			all = new ArrayList<PersonVO>();
			while (rset.next()) {
				all.add(new PersonVO(rset.getString(1)));
			}
		} finally {
			DBUtil.close(con, pstmt);
		}
		return all;
	}
	
	public static ArrayList<PersonVO> selecHobbyjeonju() throws SQLException {
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rset = null;
		ArrayList<PersonVO> all = null;
		
		try {
			con = DBUtil.getConnection();
			pstmt = con.prepareStatement("select id from hobby where travel='jeonju' ");
			rset = pstmt.executeQuery();

			all = new ArrayList<PersonVO>();
			while (rset.next()) {
				all.add(new PersonVO(rset.getString(1)));
			}
		} finally {
			DBUtil.close(con, pstmt);
		}
		return all;
	}
	
	public static ArrayList<PersonVO> selecHobbyenglish() throws SQLException {
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rset = null;
		ArrayList<PersonVO> all = null;
		
		try {
			con = DBUtil.getConnection();
			pstmt = con.prepareStatement("select id from hobby where study='english' ");
			rset = pstmt.executeQuery();

			all = new ArrayList<PersonVO>();
			while (rset.next()) {
				all.add(new PersonVO(rset.getString(1)));
			}
		} finally {
			DBUtil.close(con, pstmt);
		}
		return all;
	}
	
	
	public static ArrayList<PersonVO> selecHobbycomputer() throws SQLException {
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rset = null;
		ArrayList<PersonVO> all = null;
		
		try {
			con = DBUtil.getConnection();
			pstmt = con.prepareStatement("select id from hobby where study='computer' ");
			rset = pstmt.executeQuery();

			all = new ArrayList<PersonVO>();
			while (rset.next()) {
				all.add(new PersonVO(rset.getString(1)));
			}
		} finally {
			DBUtil.close(con, pstmt);
		}
		return all;
	}
	
	
	public static ArrayList<PersonVO> selecHobbyread() throws SQLException {
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rset = null;
		ArrayList<PersonVO> all = null;
		
		try {
			con = DBUtil.getConnection();
			pstmt = con.prepareStatement("select id from hobby where study='read' ");
			rset = pstmt.executeQuery();

			all = new ArrayList<PersonVO>();
			while (rset.next()) {
				all.add(new PersonVO(rset.getString(1)));
			}
		} finally {
			DBUtil.close(con, pstmt);
		}
		return all;
	}
	
	public static ArrayList<PersonVO> selecHobbyjob() throws SQLException {
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rset = null;
		ArrayList<PersonVO> all = null;
		
		try {
			con = DBUtil.getConnection();
			pstmt = con.prepareStatement("select id from hobby where study='job' ");
			rset = pstmt.executeQuery();

			all = new ArrayList<PersonVO>();
			while (rset.next()) {
				all.add(new PersonVO(rset.getString(1)));
			}
		} finally {
			DBUtil.close(con, pstmt);
		}
		return all;
	}
	
	public static int insert(PersonVO value) throws SQLException {
		Connection con = null;
		PreparedStatement pstmt = null;
		try {
			con = DBUtil.getConnection();
			System.out.println("==== " + con);
			pstmt = con.prepareStatement("insert into person values(?,?,?,?,?)");

			pstmt.setString(1, value.getId());
			pstmt.setString(2, value.getPw());
			pstmt.setString(3, value.getName());
			pstmt.setString(4, value.getGender());
			pstmt.setString(5, value.getAge());


			return pstmt.executeUpdate();
		} finally {
			DBUtil.close(con, pstmt);
		}

	}
	
	
	public static int insertHobby(PersonVO value) throws SQLException {
		Connection con = null;
		PreparedStatement pstmt = null;
		try {
			con = DBUtil.getConnection();
			System.out.println("==== " + con);
			pstmt = con.prepareStatement("insert into hobby values(?,?,?,?,?,?,?)");

			pstmt.setString(1, value.getId());
			pstmt.setString(2, value.getSport());
			pstmt.setString(3, value.getGame());
			pstmt.setString(4, value.getCulture());
			pstmt.setString(5, value.getRestraunt());
			pstmt.setString(6, value.getTravel());
			pstmt.setString(7, value.getStudy());

			return pstmt.executeUpdate();
		} finally {
			DBUtil.close(con, pstmt);
		}

	}

}

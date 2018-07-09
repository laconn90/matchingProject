package util;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;

public class DBUtil {
	static DataSource ds;
	static {
		Context initContext;
		try {
			initContext = new InitialContext();
			Context envContext  = (Context)initContext.lookup("java:/comp/env");
			ds = (DataSource)envContext.lookup("jdbc/myoracle");
		} catch (NamingException e) {
			e.printStackTrace();
		}
	}
	public static Connection getConnection() throws SQLException {
		return ds.getConnection();
	}
	public static void close(Connection con, Statement stmt) {
		try {
			if(con != null) {
				con.close();
				con = null;
			}
			if(stmt != null) {
				stmt.close();
				stmt = null;
			}
		}catch(Exception e) {
			e.printStackTrace();
		}
	}
	public static void close(Connection con, Statement stmt, ResultSet rset) {
		close(con,stmt);
		try {
			if(rset != null) {
				rset.close();
				rset = null;
			}
		}catch(Exception e) {
			e.printStackTrace();
		}
	}
}
